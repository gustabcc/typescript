// User typeguard

/* 
  O TS não executa JS durante a checagem dos tipos, para isso
  é utilizado o Type Predicate, que indica qual o tipo de 
  argumento uma função booleana recebeu para ser verdadeira
*/

function isString(value: unknown):value is string {
  return typeof value === 'string'
};

function handleData(data: unknown) {
  if(isString(data)) {
    data.toUpperCase();
  }
}

/* 
  O Type Predicate pode ser especialmente utilizado para criarmos 
  Type Guards para objetos específicos e garantirmos a Type Safety (segurança) do projeto.
*/  

async function fetchProducts() {
  const response = await fetch('https://api.origamid.dev/json/cursos.json');
  const json = await response.json();
  
  showCourse(json);
}

fetchProducts()

interface Produto {
  nome: string;
  preco: number;
}

function isProduct(value: unknown): value is Produto {
  if(
    value && typeof value === 'object' &&
    'nome' in value &&
    'preco' in value
  ) {
    return true;
  } else {
    return false
  }
}

function handleProduct(data: unknown) {
  if(isProduct(data)) {
    console.log(data)
  }
}

/* 
  // 1 - Faça um fetch da API: https://api.origamid.dev/json/cursos.json
  // 2 - Defina a interface da API
  // 3 - Crie um Type Guard, que garanta que a API possui nome, horas e tags
  // 4 - Use Type Guards para garantir a Type Safety do código
  // 5 - Preencha os dados da API na tela.
*/

interface Curso {
  nome: string;
  horas: number;
  aulas: number;
  gratuito: boolean;
  tags: string[];
  idAulas: number[];
  nivel: 'inciante' | 'avançado';
}

function isCourse(curso: unknown): curso is Curso {
  if (
    curso &&
    typeof curso === 'object' &&
    'nome' in curso &&
    'horas' in curso &&
    'tags' in curso
  ) {
    return true;
  } else {
    return false;
  }
}

function showCourse(curso: unknown) {
  if (Array.isArray(curso)) {
    curso.filter(isCourse).forEach((curso) => {
      document.body.innerHTML = `
        <div>
          <h1>${curso.nome}</h1>
          <p>${curso.horas}</p>
          <p>${curso.tags}</p>
        </div>
      `
    })
  }
}