// Minha Primeira Aplicação I
// Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:

let pessoas = require('./mesaArquivo');
console.log(pessoas);


// a maior e a menor altura do grupo;
function TallerAndShorter(array){
    pessoas.sort((a,b) => {return b.altura - a.altura});
    console.log('A pessoa com maior altura é : ' + pessoas[0].nome + ' com ' + pessoas[0].altura + 'm.');
    pessoas.sort((a,b) => {return a.altura - b.altura});
    console.log('A pessoa com menor altura é : ' + pessoas[0].nome + ' com ' + pessoas[0].altura + 'm.');
}

TallerAndShorter(pessoas);

// a média de altura das mulheres;


function MediumHeight(array) {
    let mulher = array.filter((pessoa) => {return pessoa.sexo == 'F'});
    let soma = mulher.reduce((acumulador,valor) => acumulador + valor.altura, 0);
    let media = soma / mulher.length;
    return 'A média de altura das mulheres é: ' + media;
}

console.log(MediumHeight(pessoas));

// o número de homens:
function MenNumber(array) {
    let homem = array.filter((pessoa) => {return pessoa.sexo == 'M'});
    return 'A quantidade de homens é: ' + homem.length;
}

console.log(MenNumber(pessoas));