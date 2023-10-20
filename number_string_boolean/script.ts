/*
    string, number e boolean são tipos primitivos do TS.
    o typeof e utilizado para retornar os valores das variáveis com seus respectivos tipos de dados.
    o typeof funciona com uma type guard.
*/

const frase = 'Front-end';
const preco = 500;
const verdade = true;

if(typeof frase === 'string') {
    console.log('A frase é uma string');
}

// o código acima funciona para os outros tipos também.