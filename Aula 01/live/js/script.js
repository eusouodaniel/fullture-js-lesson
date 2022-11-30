function validação(campo, nomeAmigável){
    if (campo === "") {
        alert("Preencha o campo " + nomeAmigável);
        return false;
    } else {
        return true;
    }
}

function obtemValor() {
    let inicio = document.querySelector("#inicio").value;
    let fim = document.getElementById("fim").value;
    let atividade = document.querySelector("#atividade").value;

    if(validação(inicio, "início") &&
        validação(fim, "fim") &&
        validação(atividade, "atividade")){
            let obj = {
                inicio,
                fim, 
                atividade
            }
            return obj
        }else{
            alert("falha");
        }

}

let btnInserir = document.querySelector("#inserir");
btnInserir.addEventListener("click", () => {
    let obj = obtemValor();
    console.table(obj);
}); //callback