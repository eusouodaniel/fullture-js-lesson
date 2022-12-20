document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("logado")) {
        let form = document.getElementById("form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const usuarios = JSON.parse(localStorage.getItem("usuarios"));
            let validaLogin = 0;
            usuarios.forEach(usuario => {
                if (email == usuario.email && password == usuario.password) {
                    validaLogin++
                }
            })

            if (validaLogin > 0) {
                localStorage.setItem("email", email);
                localStorage.setItem("logado", true);
                window.location = "index.html";
            }
        })
    } else {
        window.location = "index.html"
    }
})