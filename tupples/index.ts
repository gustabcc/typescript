// 1 - Faça um fetch das vendas: https://api.origamid.dev/json/vendas.json
// 2 - Defina o tipo/interface de cada venda (tuple)
// 3 - Some o total das vendas e mostre na tela

async function fetchVendas() {
  const response = await fetch('https://api.origamid.dev/json/vendas.json');
  const json = await response.json();

  somarVendas(json)
}

interface Produto {
  marca: string;
  cor: string;
}

type Venda = [string, number, string, Produto]; 

function somarVendas(vendas: Venda[]) {

  const total = vendas.reduce((valor, venda) => {
    return valor + venda[1]
  }, 0);

  document.body.innerHTML = `
    <p>Total: ${total}</p>
  `
}

fetchVendas()