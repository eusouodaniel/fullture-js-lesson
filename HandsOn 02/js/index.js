const value1 = 4;
const value2 = 4;

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

function input() {
    alert("teste")
}

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let valor1 = document.getElementById("valor1");
    let valor2 = document.getElementById("valor2");
    let mensagem = document.getElementById("mensagem")
    if (valor1.value && valor2.value) {
        mensagem.innerHTML = Number(valor1.value)+Number(valor2.value)
        valor1.value = "";
        valor2.value = "";
    } else {
        mensagem.innerHTML = "Valores inválidos e/ou vazios"
    }
})


// escopo global
// escopo local