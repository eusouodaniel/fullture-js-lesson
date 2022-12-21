const TODOS = "todos";
const LOGIN_PAGE = "login.html"

document.addEventListener("DOMContentLoaded", () => {
    if (verificaLogin) {
        this.preencheBemVindo();

        let marca = '';
        let tipo = '';

        let divCarros = document.getElementById("carros");
        const carros = this.recuperaCarros();

        carros.forEach(carro => {
            divCarros.innerHTML  += this.populaCarros(carro)
        });

        let filtro = document.getElementById("filtro");
        filtro.addEventListener('change', (e) => {
            divCarros.innerHTML = "";

            let selectModelo = document.getElementById("selectModelo");
            selectModelo.innerHTML = "";
            carros.forEach(carro => {
                let marcaNormalizada = carro.marca.toLowerCase();
                let selectNormalizado = e.target.value.toString().toLowerCase();
                let tipoCarro = carro.tipo.toLowerCase();

                if (marcaNormalizada == selectNormalizado
                    && tipoCarro.indexOf(tipo) != -1) {
                    selectModelo.innerHTML += this.criarOption(carro.modelo);;
                    marca = selectNormalizado;
                    divCarros.innerHTML += this.populaCarros(carro)
                } else if (selectNormalizado == TODOS) {
                    selectModelo.innerHTML += this.criarOption(carro.modelo);
                    divCarros.innerHTML += this.populaCarros(carro)
                }
            })
        });

        let modelo = document.getElementById("modelo");
        modelo.addEventListener('change', (e) => {
            divCarros.innerHTML = "";
            let seletNormalizado = e.target.value;
            carros.forEach(carro => {
                let modeloNormalizado = carro.modelo.toLowerCase();
                if (seletNormalizado == modeloNormalizado) {
                    divCarros.innerHTML += this.populaCarros(carro)
                }
            })
        })

        let filtroTipo = document.getElementById("filtroTipo");
        filtroTipo.addEventListener('input', (e) => {
            divCarros.innerHTML = "";
            carros.forEach(carro => {
                let tipoCarro = carro.tipo.toLowerCase();
                let inputNormalizado = e.target.value.toString().toLowerCase();
                let marcaCarro = carro.marca.toLowerCase();

                if (tipoCarro.indexOf(inputNormalizado) != -1
                    && marca 
                    && marcaCarro == marca) {
                    tipo = inputNormalizado;
                    divCarros.innerHTML += this.populaCarros(carro);
                }
            })
        })

        let form = document.querySelector("form")
        let btnCarroSubmit = document.getElementById("btnCarroSubmit");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let marca = document.getElementById("marca").value;
            let tipo = document.getElementById("tipo").value;
            let modelo = document.getElementById("modelo").value;
            let ano = document.getElementById("ano").value;
            let preco = document.getElementById("preco").value;
            
            if (this.validaCadastroDeCarro(marca,tipo,modelo,ano,preco)) {
                let carro = { marca, tipo, modelo, ano, preco };

                form.reset();
                
                carros.push(carro);
                localStorage.setItem("carros", JSON.stringify(carros));
                btnCarroSubmit.classList.remove("btnRed"); 
                btnCarroSubmit.classList.add("btnGreen");
                alert("Carro foi cadastrado")
            } else {
                btnCarroSubmit.classList.remove("btnGreen");
                btnCarroSubmit.classList.add("btnRed");
                alert("Formulário possui erros")
            }
        })
        let btnSair = document.getElementById("sair");
        btnSair.addEventListener("click", () => {
            localStorage.removeItem("email");
            localStorage.removeItem("logado");
            window.location = LOGIN_PAGE;
        });
        
    } else {
        window.location = LOGIN_PAGE;
    }
});

function verificaLogin() {
    return localStorage.getItem("logado") == 'true';
}

function preencheBemVindo() {
    let bemVindo = document.getElementById("bemVindo");
    bemVindo.innerHTML = `Bem-vindo ${this.recuperaEmail()}`;

    if(this.verificaTipo() == "A") {
        bemVindo.className = "labelBlue"
    } else if (this.verificaTipo() == "B") {
        bemVindo.className = "labelRed"
    } else {
        bemVindo.className = "labelGreen"
    }
}

function recuperaEmail() {
    return localStorage.getItem("email");
}

function verificaTipo() {
    return localStorage.getItem("tipo");
}

function recuperaCarros() {
    return JSON.parse(localStorage.getItem("carros"));
}

function populaCarros(carro) {
    return `
        <h3>${carro.marca}</h3>
        <p>${carro.tipo}</p>
        <p>${carro.modelo}</p>
        <p>${carro.ano}</p>
        <p>${carro.preco}</p>
        <br>
    `
}

function criarOption(modelo) {
    return `<option value="${modelo.toLowerCase()}">${modelo}</option>`
}

function validaCadastroDeCarro(marca, tipo, modelo, ano, preco) {
    return marca && tipo && modelo && ano && preco;
}