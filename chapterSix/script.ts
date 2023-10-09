const links = document.querySelectorAll(".link");

links.forEach(link => {
    if(link instanceof HTMLElement) {
        ativarElemento(link);    
    }
})

function ativarElemento(link: HTMLElement) {
    link.style.color = "#FA4";
    link.style.border = "1px solid #000"
}