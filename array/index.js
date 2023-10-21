"use strict";
/*
    Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.
    Existem apenas dois níveis de cursos, Iniciante (iniciante) e Avançado (avancado). Se for para iniciante pinte o título de azul, para avançado pinte de vermelho.
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchApi() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(' https://api.origamid.dev/json/cursos.json');
        const json = yield response.json();
        return showMoreCourse(json);
    });
}
function showMoreCourse(cursos) {
    cursos.forEach((curso) => {
        let color;
        if (curso.nivel === 'iniciante') {
            color = 'blue';
        }
        else if (curso.nivel === 'avancado') {
            color = 'red';
        }
        document.body.innerHTML += `
        <div>
            <h1 style="color: ${color}">Curso: ${curso.nome}</h1>
            <p>Horas: ${curso.horas}</p>
            <p>Aulas: ${curso.aulas}</p>
            <p>Gratuidade: ${curso.gratuito}</p>
            <p>Nivel: ${curso.nivel}</p>
        </div>
        `;
    });
}
fetchApi();
