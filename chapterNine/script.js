"use strict";
function arredonda(value) {
    if (typeof value === "number") {
        return Math.ceil(value);
    }
    else {
        return Math.ceil(Number(value)).toString();
    }
}
console.log(arredonda(200.4679));
console.log(arredonda("45.3289"));
