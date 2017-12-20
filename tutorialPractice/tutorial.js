console.log("linked");
var a, b;
var result

function setValues() {
    a = Number(document.getElementById("a").value);
    b = Number(document.getElementById("b").value);
}

function sum() {
    setValues();
    result = a + b;
    alert("The sum is equal to" + result);
}

function diff() {
    setValues();
    result = a - b;
    alert("The difference is equal to" + result);
}

function mult() {
    setValues();
    result = a * b;
    alert("The product is equal to" + result);
}

function div() {
    setValues();
    result = a / b;
    alert("The quotient is equal to" + result);
}
