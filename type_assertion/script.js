"use strict";
/*
  Type Assertion ou Type Casting é uma funcionalidade em TS
  que permite informar ao compilador o tipo de uma variável
  quando o TS não é capaz determina-lo automaticamente.
  Útil quando você tem mais conhecimento sobre o tipo de
  varável do que o TS.
*/
// type assertion com as
const valor = 'teste';
const comprimento = valor.length;
const newValue = 'uma string';
const tam = newValue.length;
console.log(comprimento, tam);
