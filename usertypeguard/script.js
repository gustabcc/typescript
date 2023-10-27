"use strict";
// User typeguard
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/*
  O TS não executa JS durante a checagem dos tipos, para isso
  é utilizado o Type Predicate, que indica qual o tipo de
  argumento uma função booleana recebeu para ser verdadeira
*/
function isString(value) {
    return typeof value === 'string';
}
;
function handleData(data) {
    if (isString(data)) {
        data.toUpperCase();
    }
}
/*
  O Type Predicate pode ser especialmente utilizado para criarmos
  Type Guards para objetos específicos e garantirmos a Type Safety (segurança) do projeto.
*/
function fetchProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/cursos.json');
        const json = yield response.json();
        showCourse(json);
    });
}
fetchProducts();
function isProduct(value) {
    if (value && typeof value === 'object' &&
        'nome' in value &&
        'preco' in value) {
        return true;
    }
    else {
        return false;
    }
}
function handleProduct(data) {
    if (isProduct(data)) {
        console.log(data);
    }
}
function isCourse(curso) {
    if (curso &&
        typeof curso === 'object' &&
        'nome' in curso &&
        'horas' in curso &&
        'tags' in curso) {
        return true;
    }
    else {
        return false;
    }
}
function showCourse(curso) {
    if (Array.isArray(curso)) {
        curso.filter(isCourse).forEach((curso) => {
            document.body.innerHTML = `
        <div>
          <h1>${curso.nome}</h1>
          <p>${curso.horas}</p>
          <p>${curso.tags}</p>
        </div>
      `;
        });
    }
}
