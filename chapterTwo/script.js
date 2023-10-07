"use strict";
function toNumber(number) {
    if (typeof number === 'string') {
        return Number(number);
    }
    if (typeof number === 'number') {
        return number;
    }
    throw new Error("valor deve ser um número ou uma string");
}
console.log(toNumber(45));
