function retorno<teste>(a: teste): teste {
    return a;
}

// console.log(retorno("bhaskara"));
// console.log(retorno(255))

function firstFive<tipo>(lista: tipo[]): tipo[] {
    return lista.slice(0, 5);
}

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const frutas = ["banana", "laranja", "maçã", "uva", "pêra", "goiaba"];

const first = firstFive(numeros);
const five = firstFive(frutas);

// console.log(first);
// console.log(five)

function notNull<tipo>(arg: tipo) {
    if(arg !== null) {
        return arg;
    } else {
        return null;
    }
}

// console.log(notNull("moskeito".toUpperCase()));

function tipoDado<tipo>(a: tipo): {dado: tipo, tipo: string} {
    const result = {
        dado: a,
        tipo: typeof a,
    }
    console.log(result);
    return result;
}

tipoDado({});

interface Notebook {
    nome: string;
    preco: number;
}

async function getData<T>(url: string): Promise<T> {
    const response = await fetch (url);
    return await response.json();
}

async function handleData() {
    const notebook = await getData<Notebook>("https://api.origamid.dev/json/notebook.json");
    console.log(notebook);
}

handleData();