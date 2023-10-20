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
function fetchApi() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/notebook.json');
        const json = yield response.json();
        return showMoreProduct(json);
    });
}
fetchApi();
function showMoreProduct(produto) {
    const verifySecurity = produto.seguroAcidentes ? "Sim" : "Não";
    document.body.innerHTML = `
        <div>
            <h1>Produto: ${produto.nome}</h1>
            <p>Preço: ${produto.preco}</p>
            <p>Descrição: ${produto.descricao}</p>
            <p>Garantia: ${produto.garantia} anos</p>
            <p>Seguro para acidente: ${verifySecurity}</p>
            <p>Empresa montadora: ${produto.empresaFabricante.nome}</p>
        </div>
    `;
}
