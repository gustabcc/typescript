// utilizando a palavra type, é possível criar um tipo customizado.
type Categoria = 'Design' | 'Desenvolvedor';

// utilizando a palavra interface, podemos obter o mesmo resultado.

interface Produto {
    nome: string;
    preco: number;
    descricao: string;
    garantia: string;
    seguroAcidentes: boolean;
    empresaFabricante: Empresa;
    empresaMontadora: Empresa;
}

interface Empresa {
    nome: string;
    fundacao: number;
    pais: string;
}

async function fetchApi() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    const json = await response.json();

    return showMoreProduct(json);
}

fetchApi();


function showMoreProduct(produto: Produto) {

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
    `
}
