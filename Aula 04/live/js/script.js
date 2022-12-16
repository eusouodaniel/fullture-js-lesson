let logado = JSON.parse(sessionStorage.getItem("logado")) || false;
if(!logado){
    window.location = "login.html";
}

let formulário = document.querySelector("form");
formulário.addEventListener("submit", submissão); //callback

let atividades = obtemLocalStorage();
atualizaDOM();

function validação(campo, nomeAmigável){
    if (campo === "") {
        alert("Preencha o campo " + nomeAmigável);
        return false;
    } else {
        return true;
    }
}

function atualizaDOM(){
    for(let obj of atividades){
        insereNoDOM(obj);
    }
}

function calculaTempo(fim, inicio){
    let auxFim = fim.split(":");
    let auxInicio = inicio.split(":");
    let fimNormalizado = parseInt(auxFim[0])*60 + parseInt(auxFim[1]);
    let inicioNormalizado = parseInt(auxInicio[0])*60 + parseInt(auxInicio[1]);
    return fimNormalizado - inicioNormalizado;
}

function obtemValor() {
    let inicio = formulário.querySelector("#inicio").value;
    let fim = formulário.querySelector("#fim").value;
    let atividade = formulário.querySelector("#atividade").value;
    let minutos = calculaTempo(fim, inicio);

    if(validação(inicio, "início") &&
        validação(fim, "fim") &&
        validação(atividade, "atividade")){
            let obj = {
                inicio,
                fim, 
                atividade,
                minutos
            }
            return obj
        }else{
            alert("falha");
        }

}

function sãoIguais(elemento1, elemento2){
    return elemento1.inicio === elemento2.inicio && 
            elemento1.fim === elemento2.fim &&
            elemento1.atividade === elemento2.atividade;
}

function insereNaLista(objAtividade){
    let vetorElemento = atividades.filter( (item) => { 
        if (sãoIguais(item, objAtividade)){
            alert("Objeto já foi inserido");
            return item;
        }
    } );
    if(vetorElemento.length === 0){
        atividades.push(objAtividade);
        salvaLocalStorage();
        return true;
    }
    return false;
}

function submissão(evento){
    evento.preventDefault();
    let objAtividade = obtemValor();
    let inserido = insereNaLista(objAtividade);
    if(inserido){
        insereNoDOM(objAtividade);
        formulário.reset();
    }
    formulário.querySelector("#inicio").focus();
}

function removeDaLista(lista, objAtividade){
    let index = lista.findIndex(item => sãoIguais(item, objAtividade));
    lista.splice(index, 1);
    salvaLocalStorage();
}

function _criaTD(texto, linha){
    let novoTD = document.createElement("td");
    novoTD.innerHTML = texto;
    linha.appendChild(novoTD);
    return novoTD;
}

function insereNoDOM(obj){
    let tabela = document.querySelector("#listaAtividades");
    let linha = document.createElement("tr");
    let tdAcoes = document.createElement("td");
    let btnExcluir = document.createElement("button");
    let btnArquivar = document.createElement("button");

    _criaTD(obj.inicio, linha);
    _criaTD(obj.fim, linha);
    _criaTD(obj.minutos, linha);
    _criaTD(obj.atividade, linha);
    btnExcluir.innerHTML = "x";
    btnArquivar.innerHTML = "<strong>OK</strong>";

    tdAcoes.appendChild(btnExcluir);
    tdAcoes.appendChild(btnArquivar);
    linha.appendChild(tdAcoes);
    tabela.appendChild(linha);

    btnExcluir.addEventListener("click", (evento)=>{
        removeDoDOM(evento, tabela, obj);
    });
    
    btnArquivar.addEventListener("click", (evento)=>{
        console.log(evento.target);
    });
}

function removeDoDOM(evento, tabela, obj){
    let target = evento.target;
    let td = target.parentNode;
    let tr = td.parentNode;
    tabela.removeChild(tr);
    removeDaLista(atividades, obj);
}

const logout = function() {
    alert("Ainda em criação");
}

function salvaLocalStorage(){
    localStorage.setItem("atividades", JSON.stringify(atividades));
}

function obtemLocalStorage(){
    let atividadesLS = JSON.parse(localStorage.getItem("atividades")) || [];
    return atividadesLS;
}

let btnLogout = document.querySelector("#BtnLogout");
btnLogout.addEventListener("click", logout);
