"use strict";
/*
    Quando definimos uma classe, o TS gera a interface do objeto produzido pela mesma.
*/
class Produto {
    constructor(nome) {
        this.nome = nome;
    }
}
const Potter = new Produto("Harry Potter e o prisioneiro de Askaban");
console.log(Potter);
/*
    Utilizando o instanceof podemos verificar se um objeto é uma instância(foi construido ou herda)
    de uma função construtora
*/
class Livro {
    constructor(autor) {
        this.autor = autor;
    }
}
class Jogo extends Produto {
    constructor(jogadores, nome) {
        super(nome);
        this.jogadores = jogadores;
    }
}
function searchProduct(produto) {
    if (produto === "Harry Poter e as Reliquias da Morte") {
        return new Livro("Gustavo");
    }
    if (produto === "Need for Speed") {
        return new Jogo(1, 'Need for Speed');
    }
    return null;
}
const jogo = searchProduct('Need for Speed');
if (jogo instanceof Jogo) {
    jogo.jogadores;
}
/*
    1 - Selecione o link utilizando o método getElementById.
    2 - Substitua o href do link (HTMLAnchorElement) de http:// para https://.
*/
const link = document.getElementById('origamid');
if (link instanceof HTMLAnchorElement) {
    link.href = link.href.replace('http://', 'https://');
}
