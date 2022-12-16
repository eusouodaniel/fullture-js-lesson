let formulário = document.querySelector("form");
formulário.addEventListener("submit", (evento)=>{
    evento.preventDefault();
    let user = formulário.querySelector("#usuario").value;
    let pass = formulário.querySelector("#password").value;
    if(user === "admin" && pass === "1234"){
        sessionStorage.setItem("logado", JSON.stringify(true));
        window.location = "index.html";
    }else{
        sessionStorage.setItem("logado", JSON.stringify(false));
        alert("Usuário ou senha inválidos");
    }
});