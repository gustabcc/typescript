async function fetchApi(api: string) {
    const response = await fetch (api);
    return response.json() as Promise<Produto>; 
}

interface Produto {
    nome: string;
    preco: number;
}

async function handleProduto() {
    const produto = ((await fetchApi("https://api.origamid.dev/json/notebook.json")) as Produto);
    return document.body.innerHTML += `
        <h2>${produto.nome}</h2>
        <p>Preco: ${produto.preco}</p>
    `
}

handleProduto()