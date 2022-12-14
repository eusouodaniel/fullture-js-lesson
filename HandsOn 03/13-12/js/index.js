let marca = '';
let tipo = '';

let carros = [{
   marca: 'Fiat',
   tipo: 'Baixo custo',
   modelo: 'Mobi',
   ano: 2020,
   preco: 40.000
},{
    marca: 'Fiat',
    tipo: 'Baixo custo',
    modelo: 'Pálio',
    ano: 2015,
    preco: 30.000
 }, {
    marca: 'Ford',
    tipo: 'Alto custo',
    modelo: 'Focus',
    ano: 2015,
    preco: 45.000  
}, {
    marca: 'Ford',
    tipo: 'Baixo custo',
    modelo: 'Ka',
    ano: 2016,
    preco: 20.000  
}, {
    marca: 'Chevrolet',
    tipo: 'Médio custo',
    modelo: 'Prisma',
    ano: 2010,
    preco: 25.000  
}];

let divCarros = document.getElementById("carros");

carros.forEach(carro => {
    divCarros.innerHTML += `
        <h3>${carro.marca}</h3>
        <p>${carro.tipo}</p>
        <p>${carro.modelo}</p>
        <p>${carro.ano}</p>
        <p>${carro.preco}</p>
        <br>
    `
});

let filtro = document.getElementById("filtro");
filtro.addEventListener('change', (e) => {
    divCarros.innerHTML = "";
    carros.forEach(carro => {
        let marcaNormalizada = carro.marca.toLowerCase();
        let selectNormalizado = e.target.value.toString().toLowerCase();
        let tipoCarro = carro.tipo.toLowerCase();

        if (marcaNormalizada == selectNormalizado
            && tipoCarro.indexOf(tipo) != -1) {
            marca = selectNormalizado;
            divCarros.innerHTML += `
                <h3>${carro.marca}</h3>
                <p>${carro.tipo}</p>
                <p>${carro.modelo}</p>
                <p>${carro.ano}</p>
                <p>${carro.preco}</p>
                <br>
            `
        }
    })
});

let filtroTipo = document.getElementById("filtroTipo");
filtroTipo.addEventListener('input', (e) => {
    divCarros.innerHTML = "";
    carros.forEach(carro => {
        let tipoCarro = carro.tipo.toLowerCase();
        let inputNormalizado = e.target.value.toString().toLowerCase();
        let marcaCarro = carro.marca.toLowerCase()

        if (tipoCarro.indexOf(inputNormalizado) != -1
            && marca 
            && marcaCarro == marca) {
            tipo = inputNormalizado;
            divCarros.innerHTML += `
                <h3>${carro.marca}</h3>
                <p>${carro.tipo}</p>
                <p>${carro.modelo}</p>
                <p>${carro.ano}</p>
                <p>${carro.preco}</p>
                <br>
            `
        }
    })
})