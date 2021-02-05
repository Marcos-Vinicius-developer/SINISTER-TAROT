const divDasImagens = document.querySelector('#cards');
const botaoDeShuffle = document.querySelector("#s");
const botaoDeSelecionar = document.querySelector('#sel');

let cards = [];
let cartasJaPegas = [];

function pegarCarta () {
    const numero = numeroRandom(34, 1);
    
    if(cartasJaPegas.includes(numero)){
        pegarCarta();
    }
    if(typeof numero == "undefined"){
        pegarCarta();
    }
    else{
        cartasJaPegas.push(numero);
        return numero;
    }
    
}

function numeroRandom (max = 78, min = 0) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function embaralhar (numeroTotalDeCartas) {
    const cardsDois = [];

    let index = 0;
    
    while(index != numeroTotalDeCartas){
        const numero = numeroRandom(numeroTotalDeCartas, 1);

        if(cardsDois.includes(numero)){}
        
        else{
            cardsDois.push(numero)
            index++
        }
    }
    

    return cardsDois;
}

function verificaTipo (item) {
    if(item == undefined){}
}

function limpar () {
    divDasImagens.innerHTML = "";
}

botaoDeShuffle.addEventListener('click', ()=>{
    cards = [...embaralhar(34)];
    cartasJaPegas = [];
    limpar();
});

botaoDeSelecionar.addEventListener('click', ()=>{
    divDasImagens.innerHTML += `<div class='carta'><img src='images/${pegarCarta()}.PNG' width='150' height='300'></div>`;
});