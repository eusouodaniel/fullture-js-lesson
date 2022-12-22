const INDEX_PAGINA = "index.html";

document.addEventListener("DOMContentLoaded", () => {
    if (!verificaLogin()) {
        let form = document.getElementById("form");
        form.addEventListener("submit", login);
    } else {
        window.location = INDEX_PAGINA;
    }
});

function verificaLogin() {
    return localStorage.getItem("logado");
}

function login(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    const usuarios = recuperaUsuarios();
    let tipoDoUsuario = "";

    usuarios.forEach(usuario => {
        if (email == usuario.email && criptografaSenha(senha) == usuario.password) {
            tipoDoUsuario = usuario.tipo;

            let numeroLogin = usuario.numeroLogin;
            usuario.numeroLogin = numeroLogin++;
            usuarios.push(usuario)
        }
    })

    if (tipoDoUsuario) {
        salvarDados(email, tipoDoUsuario);
        window.location = INDEX_PAGINA;
    }
}

function recuperaUsuarios() {
    return JSON.parse(localStorage.getItem("usuarios"));
}

function criptografaSenha(senha) {
    return CryptoJS.MD5(senha).toString();
}

function salvarDados(email, tipoDoUsuario) {
    localStorage.setItem("email", email);
    localStorage.setItem("logado", true);
    localStorage.setItem("tipo", tipoDoUsuario);
}