interface Company {
    nome: string;
    fundacao: number;
    pais: string;
}

interface Produto {
    nome: string;
    preco: number;
    descricao: string;
    garantia: string;
    seguroAcidentes: boolean;
    empresaFabricante: Company;
    empresaMontadora: Company;
}

async function fetchProduct() {
        const response =  await fetch('https://api.origamid.dev/json/notebook.json');
        const data = await response.json();
        showProductData(data);
}

fetchProduct();


function showProductData(product: Produto) {
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
