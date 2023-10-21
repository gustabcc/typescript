"use strict";
/*
    Utilizando a estrutura HTML/CSS abaixo,
    crie o script que irá fazer o botão mobile funcionar (ativar/desativar a navegação).
*/
const btn = document.getElementById('btn-mobile');
function toggleMenu(event) {
    const button = event.currentTarget;
    const nav = document.getElementById('nav');
    if (button instanceof HTMLElement && nav) {
        const active = nav.classList.contains('active');
        if (active) {
            nav.classList.remove('active');
            button.setAttribute('aria-expanded', 'false');
            button.setAttribute('aria-label', 'Abrir Menu');
        }
        else {
            nav.classList.add('active');
            button.setAttribute('aria-expanded', 'true');
            button.setAttribute('aria-label', 'Fechar Menu');
        }
    }
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener('pointerdown', toggleMenu);
