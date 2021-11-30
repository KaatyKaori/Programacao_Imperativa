/* Micro desafios

Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.
Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.
Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”
Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.*/


let numeros = [2,4,6,8];
let impares = numeros.map(function(item){
    return item + 1;
});
console.log(impares);

let nomes = ['Maria', 'Antonio', 'Maria', 'Katy'];
let marias = nomes.filter(function(filtroMaria){ 
    return filtroMaria == 'Maria';
});
console.log(marias);


let numero = [1,2,3,4];
let numerosFormatados = numero.reduce(function(acumulador, item){
    return acumulador+ "-"+item;
});
console.log(numerosFormatados);

let animais = ['Gato', 'Cachorro', 'Pinguim']
animais.forEach(function (item){
    console.log("O animal é " +item)    
});

/*Micro desafios

Crie uma função que receba um array composto por números e retorna uma nova matriz (array) com todos os valores divididos pela soma de toda a matriz, usando map() e reduce().
Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) com apenas as palavras que têm mais do que uma quantidade de letras maior do que o número informado. (verifique como funciona o método filter ())
Crie um array de objetos literais, onde cada objeto será um aluno e terá dois atributos: nome e nota. Crie duas funções que ordenam o array: uma ordenará os alunos em ordem alfabética e a outra o fará por nota, da mais alta para a mais baixa. (Analise qual método seria apropriado para este caso. Recomendamos que você consulte a documentação do MDN: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

Exercício Integrador

Temos que fazer um sistema para um Agricultor controlar suas vendas. Ele tem um controle de vendas em um caderno, onde os produtos estão organizados por nome, preço e quantidade vendida. 
Portanto, crie um array de objetos literais com essas informações. No sistema, você tem que adicionar uma função (ou várias) que realize os seguintes passos:
Calcular o lucro total de todos os produtos;
Permitir pesquisar um produto pelo nome e calcular seu lucro total;
Permite receber um valor e indicar todos os produtos que venderam mais que esse valor;
 Classifique todos os produtos pela quantidade de dinheiro que geraram.
Encontre um produto e atribua a ele um novo valor (reutilize o código que permite encontrar o produto pelo nome).
Calcule o lucro total após pagar 45% do lucro em impostos*/



