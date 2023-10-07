const input = document.querySelector("input");
//teste
// Calcula o ganho total com base no valor fornecido
function calculaGanho(value: number) {
    const paragraph = document.querySelector("p");
    if(paragraph) { 
        paragraph.innerText = `ganho total: ${value + 100 - value * 0.2}` 
    };
}

// Função chamada quando o valor do input é alterado
function totalChange() {
    if(input) {
        localStorage.setItem("total", input.value);
        calculaGanho(Number(input.value));
    }
}

const total = localStorage.getItem("total");

// Inicializa o input com o valor do localStorage, se disponível
if(input && total) {
    input.value = total;
    calculaGanho(Number(input.value));
}

// Adiciona um ouvinte de evento para atualizar o localStorage quando o input é alterado
if(input) {
    input.addEventListener('keyup', totalChange);
}
