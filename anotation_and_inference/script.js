"use strict";
// type anotation --> o dev especifica o tipo de dado que a variável irá receber.
const age = 42;
const isOld = true;
const nome = "Gustavo";
// exemplo de type annotation como parâmetros de função
function register(name, age) {
    console.log(`
        Nome: ${name}
        Idade: ${age}
    `);
}
// exemplo de type annotation com objeto
const person = {
    name: 'Jhon',
    age: 45
};
/*
    em resumo, as types annotations são mais utilizadas para tipar funções, objetos e classes,
    pois ajudam a prevenir erros no recebimento de dados.
*/
/********************************************************************************************/
/*
    type inference --> Se trata de quando o compilador infere um tipo.
*/
const cliente = "marcos"; // como o tipo não foi definido, o compilador atribui o tipo string a variável. 
const ano = 2023; // o compilador atribui o tipo number a variável, e agora somente valores numéricos podem ser passados.
/*
    a type inference em objetos complexos, procura o tipo de dado mais abrangente na no objto e atribui o tipo do dado
    a essa estrutura, por exemplo:
*/
const arr = [45, 42, true];
//arr.push("String") --> neste caso, o array não vai adicionar a palavra string em seu armazenamento
// as funções também podem ter seus retornos inferidos.
function sum(a, b) {
    return a + b;
}
// exercicio: conserte a função usando TS.
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
// exercicio: conserte as funções usando TS.
const input = document.querySelector('input');
const total = localStorage.getItem('total');
if (input && total) {
    input.value = total;
    calcularGanho: Number((input.value));
}
function calcularGanho(value) {
    const p = document.querySelector('p');
    if (p) {
        p.innerText = `ganho total: ${value + 100 - value * 0.2}`;
    }
}
function totalMudou() {
    if (input) {
        localStorage.setItem('total', input.value);
        calcularGanho(Number(input.value));
    }
}
if (input) {
    input.addEventListener('keyup', totalMudou);
}
