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

function display(){
    const display = document.getElementById("display");
    const el = document.getElementsByClassName("nums");
    el.addEventListener("click", () => {display.innerHTML = el.innerHTML; });
    return el;
}