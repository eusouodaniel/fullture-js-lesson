let usuarios = [{
    'email': 'daniel1@gmail.com',
    'senha': '12345678'
},{
    'email': 'daniel2@gmail.com',
    'senha': '123456'
},{
    'email': 'lucas@gmail.com',
    'senha': '654321',
}];

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    let login = {
        'email': email,
        'senha': password
    }

    let resultado = document.getElementById("resultado");
    let controleLogin = 0;
    usuarios.forEach(usuario => {
        if (login === usuario) {
            controleLogin++;
        }
    });
    if (controleLogin > 0) {
        resultado.append(email)
        form.reset();
    } else {
        resultado.style.color = "#FFA07A";
        resultado.append("Credenciais inválidas")
    }
})