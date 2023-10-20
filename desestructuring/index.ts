/* durante a desestruturação de objetos, podemos indicar o tipo de dado com a sintaxe:
    {key1, key2}: {key1: type1; key2: type2;}
*/

function handleData({nome}: {nome: string}) {
    return nome
}

function handleClick({currentTarget, pageX}: {currentTarget: EventTarget | null, pageX: number}) {
    console.log(currentTarget, pageX)
}

document.documentElement.addEventListener('click', handleClick)