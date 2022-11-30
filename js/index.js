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
    let radio = document.querySelector('input[name="option"]:checked').value

    let usuario = {
        'email': email,
        'senha': password,
        'option': option,
        'radio': radio
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