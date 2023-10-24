// A interface de uma função é definida na sua declaração
function paintColor(color: string) {
  document.body.style.backgroundColor = color;
}

/* 
  No TS, uma função sem retorno é definida como void,
  isso evita usos errados como checagens booleanas
  de métodos que não possuem retorno
  
  Se tentar verificar o tipo dad função declarada acima
  após a atribuição de um valor no parâmetro, ela retornará
  undefined
*/ 


// if(paintColor('#F55')) {} // Aqui ele informa que uma f(n) do tipo void, não tem valor booelano para verificar.

// Agora vejamos uma função com tipo de retorno
function sum(a: any, b: any) {
  if(typeof (a + b) === 'number') {
    return true;
  } else {
    return false
  }
}

// console.log(sum(4,'4'));

/* 
  Crie uma função que arredonda um valor passado para cima.
  função pode receber string ou number.
  A função deve retornar o mesmo tipo que ela receber.
*/

function round(value: number): number;
function round(value: string): string;
function round(value: string | number): string | number {
  if(typeof value === 'string') {
    return Number(value).toFixed();
  } else {
    return value.toFixed();
  }
}

console.log(round(450.7));
console.log(round('453.5'));