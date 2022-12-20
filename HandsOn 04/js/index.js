document.addEventListener("DOMContentLoaded", () => {
    let bemVindo = document.getElementById("bemVindo");
    bemVindo.innerHTML = `Bem-vindo ${localStorage.getItem("email")}`;
    if (localStorage.getItem("logado") == 'true') {
        const TODOS = "todos";

        let marca = '';
        let tipo = '';

        let carros = JSON.parse(localStorage.getItem("carros"))
        let divCarros = document.getElementById("carros");

        carros.forEach(carro => {
            divCarros.innerHTML += `
                <h3>${carro.marca}</h3>
                <p>${carro.tipo}</p>
                <p>${carro.modelo}</p>
                <p>${carro.ano}</p>
                <p>${carro.preco}</p>
                <br>
            `
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
                    
                    let option = `<option value="${carro.modelo.toLowerCase()}">${carro.modelo}</option>`
                    selectModelo.innerHTML += option;

                    marca = selectNormalizado;
                    divCarros.innerHTML += `
                        <h3>${carro.marca}</h3>
                        <p>${carro.tipo}</p>
                        <p>${carro.modelo}</p>
                        <p>${carro.ano}</p>
                        <p>${carro.preco}</p>
                        <br>
                    `
                } else if (selectNormalizado == TODOS) {
                    let option = `<option value="${carro.modelo.toLowerCase()}">${carro.modelo}</option>`
                    selectModelo.innerHTML += option;
                    divCarros.innerHTML += `
                        <h3>${carro.marca}</h3>
                        <p>${carro.tipo}</p>
                        <p>${carro.modelo}</p>
                        <p>${carro.ano}</p>
                        <p>${carro.preco}</p>
                        <br>
                    `
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
                    divCarros.innerHTML += `
                        <h3>${carro.marca}</h3>
                        <p>${carro.tipo}</p>
                        <p>${carro.modelo}</p>
                        <p>${carro.ano}</p>
                        <p>${carro.preco}</p>
                        <br>
                    `
                }
            })
        })

        let filtroTipo = document.getElementById("filtroTipo");
        filtroTipo.addEventListener('input', (e) => {
            divCarros.innerHTML = "";
            carros.forEach(carro => {
                let tipoCarro = carro.tipo.toLowerCase();
                let inputNormalizado = e.target.value.toString().toLowerCase();
                let marcaCarro = carro.marca.toLowerCase()

                if (tipoCarro.indexOf(inputNormalizado) != -1
                    && marca 
                    && marcaCarro == marca) {
                    tipo = inputNormalizado;
                    divCarros.innerHTML += `
                        <h3>${carro.marca}</h3>
                        <p>${carro.tipo}</p>
                        <p>${carro.modelo}</p>
                        <p>${carro.ano}</p>
                        <p>${carro.preco}</p>
                        <br>
                    `
                }
            })
        })

        let form = document.querySelector("form")
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            let marca = document.getElementById("marca").value;
            let tipo = document.getElementById("tipo").value;
            let modelo = document.getElementById("modelo").value;
            let ano = document.getElementById("ano").value;
            let preco = document.getElementById("preco").value;

            let carro = {
                marca,
                tipo,
                modelo,
                ano,
                preco
            }
            form.reset();
            
            carros.push(carro);
            localStorage.setItem("carros", JSON.stringify(carros));

            alert("Carro foi cadastrado")
        })
        let btnSair = document.getElementById("sair");
        btnSair.addEventListener("click", () => {
            localStorage.removeItem("email");
            localStorage.removeItem("logado");
            window.location = "login.html"
        })

    } else {
        window.location = "login.html";
    }
});