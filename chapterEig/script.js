"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function retorno(a) {
    return a;
}
// console.log(retorno("bhaskara"));
// console.log(retorno(255))
function firstFive(lista) {
    return lista.slice(0, 5);
}
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const frutas = ["banana", "laranja", "maçã", "uva", "pêra", "goiaba"];
const first = firstFive(numeros);
const five = firstFive(frutas);
// console.log(first);
// console.log(five)
function notNull(arg) {
    if (arg !== null) {
        return arg;
    }
    else {
        return null;
    }
}
// console.log(notNull("moskeito".toUpperCase()));
function tipoDado(a) {
    const result = {
        dado: a,
        tipo: typeof a,
    };
    console.log(result);
    return result;
}
tipoDado({});
function getData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        return yield response.json();
    });
}
function handleData() {
    return __awaiter(this, void 0, void 0, function* () {
        const notebook = yield getData("https://api.origamid.dev/json/notebook.json");
        console.log(notebook);
    });
}
handleData();
