/* 
    1 - Selecione os elementos com a classe link.
    2 - Crie uma função que deve ser executada para cada elemento.
    3 - Modificar através da função o estilo da color e border.
*/

const links = document.querySelectorAll('.link');

function changeElements() {
    links.forEach((item) => {
        if(item instanceof HTMLElement) {
            changeStyleElements(item);
        }
    }) 
}

function changeStyleElements(elemento: HTMLElement) {
    elemento.style.color = '#F00';
    elemento.style.backgroundColor = '#000';
    elemento.style.border = "1px solid #456"
}

changeElements()