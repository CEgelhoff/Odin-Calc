function add(a,b) {
    return a + b;    
}

function sub(c,d) {
    return c - d;
}

function mult(e,f) {
    return e * f;
}

function divide(g,h) {
    return g / h;
}

function operate(operator, x, y) {
     
}

const numDisp = document.querySelector('#display');
const el = document.querySelectorAll('nums');

for (var i = 0; i < el.length; i++) {
    el[i].addEventListener("click", function () {
        console.log(el.textContent)
    });
}

