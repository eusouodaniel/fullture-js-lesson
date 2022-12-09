// const value1 = 4;
// const value2 = 4;

// DOM
// let btnCalc = document.getElementById("btnCalc");
// btnCalc.addEventListener("click", (e) => {
//     let validaNumero = this.validarNumero();
//     if (validaNumero) {
//         alert(Number(value1)+Number(value2))
//     }
// })

// function calc() {
//     alert("Olá mundo")
// }

// function validarNumero() {
//     if (value1 > 0 && value2 > 0) {
//         return true;
//     }
//     return false;
// }

// let mensagem = document.getElementById("mensagem");
// mensagem.style.display = "none"
// console.log(mensagem.style)

// let inputValue1 = document.getElementById("valor1");
// inputValue1.addEventListener("input", input)
// function input(e) {
//     console.log(e.data)
//     let span = document.getElementById("span");
//     span.innerHTML = e.target.value;
// }

// let form = document.querySelector("form");
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let valor1 = document.getElementById("valor1");
//     let valor2 = document.getElementById("valor2");
//     let mensagem = document.getElementById("mensagem");
//     mensagem.style.display = "block"
//     if (valor1.value && valor2.value) {
//         let resultado = Number(valor1.value)+Number(valor2.value)
//         mensagem.style.color = "#7CFC00"
//         mensagem.innerHTML = `Resultado: ${resultado}`
//         valor1.value = "";
//         valor2.value = "";
//     } else {
//         mensagem.style.color = "#FFA07A"
//         mensagem.innerHTML = "Valores inválidos e/ou vazios"
//     }
// })


// escopo global
// escopo local

let form = document.getElementById("form")
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let form = {
        "username": username,
        "email": email,
        "password": password,
        "confirmPassword": confirmPassword
    }
    let validacao = this.validaCampos(form);
    let retornoDoForm = document.getElementById("retornoDoForm");
    if (validacao == 2) {
        retornoDoForm.style.color = "#FFA07A"
        retornoDoForm.innerHTML = `
        Username inválido
        Senhas não correspondem
        `
    } else if (validacao == 1) {
        retornoDoForm.style.color = "#FFA07A"
        retornoDoForm.innerHTML = `
        Ocorrreu um erro no form
        `
    } else {
        retornoDoForm.style.color = "#7CFC00"
        retornoDoForm.innerHTML = `
        Cadastro efetuado com sucesso!
        `
    }
})

function validaCampos(form) {
    let validacao = 0;
    if (form.username.length > 6) {
        validacao++;
    }
    if (form.password != form.confirmPassword) {
        validacao++;
    }

    return validacao;
}