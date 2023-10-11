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
function fetchApi(api) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(api);
        const json = yield response.json();
        handleCursos(json);
    });
}
function isCurso(curso) {
    if (curso && typeof curso === "object" &&
        "nome" in curso &&
        "horas" in curso &&
        "tags" in curso) {
        return true;
    }
    else {
        return false;
    }
}
function handleCursos(data) {
    if (Array.isArray(data)) {
        data.filter(isCurso).forEach((item) => {
            document.body.innerHTML += `
                <div>
                    <h2>${item.nome}</h2>
                    <p>${item.horas}</p>
                    <p>${item.tags.join(", ")}</p>
                </div>
            `;
        });
    }
}
fetchApi("https://api.origamid.dev/json/cursos.json");
