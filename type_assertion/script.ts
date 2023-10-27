/* 
  Type Assertion ou Type Casting é uma funcionalidade em TS
  que permite informar ao compilador o tipo de uma variável
  quando o TS não é capaz determina-lo automaticamente.
  Útil quando você tem mais conhecimento sobre o tipo de 
  varável do que o TS.
*/

// type assertion com as

interface Produto {
  nome: string;
  preco: number;
}

async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  return response.json() as Promise<Produto>
}

async function handleProduto1() {
  const product = await fetchProduct();
  product.nome;
}

async function handleProduto2() {
  const product = (await fetchProduct()) as Produto;
  product.nome;
}

async function handleProduto3() {
  const product = await fetchProduct();
  (product as Produto).nome;
}
