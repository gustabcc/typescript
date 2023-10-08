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
function fetchProduct() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.origamid.dev/json/notebook.json');
        const data = yield response.json();
        showProductData(data);
    });
}
fetchProduct();
function showProductData(product) {
    document.body.innerHTML = `
    <div>
      <h2>${product.nome}</h2>
      <ul>
        <li>R$${product.preco}</li>
        <li>${product.descricao}</li>
        <li>${product.empresaFabricante.nome}</li>
        <li>${product.empresaMontadora.nome}</li>
      </li>
    </div>
  `;
}
