"use strict";
// destructuring 
function handleClick({ currentTarget, pageX }) {
    console.log(currentTarget, pageX);
}
document.documentElement.addEventListener('click', handleClick);
