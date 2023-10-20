/* 
    union types em TS, serve para definir uma estrutura que pode receber mais de um tipo de dado.
*/

function day(dia: number | string) {
    if(typeof dia === 'string') {
        return Number(dia);
    }
}

let informacao: string | number;

// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")

function toNumber(value: number | string) {
    if(typeof value === 'number') {
        return value
    } else if(typeof value === 'string') {
        return Number(value);
    } else {
        throw new Error ('value deve ser um número ou string');
    }
}