// micro desafio
function teste1 (x,y) {
    return y - x;
}
console.log(teste1(10,40));

// 2

function teste2 (x,y) {
    return x * 2
    console.log(x)
    return x / 2
}
console.log(teste2(10));


//Funções Simples

// 1 - função que reverta pol em cm
function polegada( num){
    const conv = 2.54
    return num * conv
}
console.log(polegada(1));

// 2 - recebe string e devolve URL
function url(nome) {
    return "https://www." + nome + ".com.br"
}
console.log(url("xpto"));

// 3 recebe uma string qlqr e devolve com "!"

function sinalExclamacao(text) {
        return text + "!"
}
console.log(sinalExclamacao("NAO"));

// 4 calcular idade cachorros (7x)
function idadeCachorro(idade) {
    return idade * 7
}
console.log(idadeCachorro(1));

// 5 valor hora trabalho
function horaTrabalhada(salario, horas) {
    return salario/horas
}
console.log(horaTrabalhada(1000, 160));

// 6 - IMC
function IMC(peso, altura) {
    return peso / (altura*2)
}
console.log(IMC(100, 1,72));
console.log(IMC(55, 1,53));
console.log(IMC(75, 1,73));

