//legth retorna a qtd, contando os espaços, funciona das 2 formas abaixo

console.log("Oi, eu sou o Goku   ".length);
let texto = "Oi, eu sou o Goku"
console.log(texto.length);

//indexOf localiza se tem, se existe, o caractere/palavra ou qlqr parte da string que for solicitada indicando a posição
// se não existe retorna como -1
console.log(texto.indexOf("k"));
console.log(texto.indexOf("y"));

//slice pega parte do texto (ela se mantém na string msm assim)
// pode criar uma variavel que ela fica armazenada ex abaixo
console.log(texto.slice(0,2));
let palavra = texto.slice(0,2);
console.log(palavra);

//trim remover espaços em branco antes e depois não tira entre as palavras
console.log(texto.trim()) // retirando os espaços
console.log(texto); // mantendo o original com espaços  

//split transforma string em array
console.log(texto.split());
console.log(texto.split(" "));


// replace subs altera partes da string 
//duas formas de fazer
console.log(texto.replace("Goku", "Gohan"));
let textoNovo = texto.replace("Goku", "Gohan")
console.log(textoNovo);








