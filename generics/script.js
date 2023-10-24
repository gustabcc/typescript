"use strict";
/*
    um tipo genérico é uma forma de declararmos um parâmetro para a nossa função, classe ou interface.
    esse tipo poderá ser indicado no momento de uso da função através do <tipo>.
*/
class Colection {
    constructor() {
        this.itens = [];
    }
    addItem(item) {
        this.itens.push(item);
    }
    idItem(id) {
        if (id >= 0 && id < this.itens.length) {
            return this.itens[id];
        }
        return undefined;
    }
}
function showProduct(item) {
    console.log(`
        ID - ${item.id}
        Conteudo: ${item.conteudo}
    `);
}
const numeros = new Colection();
numeros.addItem({ id: 1, conteudo: 20 });
const valor = numeros.idItem(0);
if (valor) {
    showProduct(valor);
}
