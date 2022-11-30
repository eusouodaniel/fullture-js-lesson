// document.addEventListener("DOMContentLoaded", loadDocument)

// function loadDocument() {
//     let btnSendForm = document.getElementById("sendForm");
//     btnSendForm.addEventListener("click", cadastrar)
// }

// const name = function(name) {
//     alert(name)
// }

// const name = name => alert(name)

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    // let value = select.options[select.selectedIndex].text;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let option = document.getElementById("options").value;

    //primeiro valida se existe algo "checkado"
    //pego o value do elemento
    let radio = document.querySelector('input[name="option"]:checked');
    let checkbox = document.querySelector('input[name="option"]:checked');
    let textarea = document.getElementById("textarea").value;
    let usuario = {
        'email': email,
        'senha': password,
        'option': option,
        'radio': radio ? radio.value : null,
        'checkbox': checkbox ? checkbox.value : null,
        'textarea': textarea
    }
    verificaCampos(usuario)
})

// function cadastrar() {
//     let firstName = document.getElementById("firstName").value;
//     let lastName = document.getElementById("lastName").value;
//     let usuario = {
//         'nome': firstName,
//         'sobrenome': lastName
//     }
// }

function verificaCampos(usuario) {
    if (usuario.senha.length < 8) {
        return document.getElementById("mensagem").innerHTML = "Sua senha precisa ter mais de 8 caracteres!"
    }
    if (usuario.senha.indexOf(",") == -1) {
        return document.getElementById("mensagem").innerHTML = "Sua senha precisa ter uma vírgula!"
    }
    if (usuario.email && usuario.senha && usuario.option) {
        form.reset();
        return document.getElementById("mensagem").innerHTML = "Cadastrado com sucesso!"
    }

    if (!usuario.option) {
        return alert("Selecione uma opção")
    }
    
    return document.getElementById("mensagem").innerHTML = "Digite um nome";
}


//array
let nomes = ['Daniel', 'Marcio', 'João', 'Lucas', 'Fernanda'];

nomes.push('Pâmela')
nomes.pop();
nomes.unshift('Lucas')
nomes.shift();
nomes.sort();
nomes.reverse();

// console.table(nomes)
nomes.forEach(nome => {
    // console.log(nome)
});

let valores = [1, 2, 3, 4, 5];
// let valores2 = valores.map(valor => valor * 2)
// console.log(valores2)
// let valores2 = valores.filter(valor => {
//     return valor % 2 == 0
// })
// console.log(valores2)

// previous, current
let resultado = valores.reduce((result, valor) => {
    return Number(result) + Number(valor);
}, 0);
console.log(resultado)