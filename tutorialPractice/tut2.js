console.log("linked");

function btnplus() {
    document.calculator.display.value += "+";
}

function btnminus() {
    document.calculator.display.value += "-";
}

function btnmult() {
    document.calculator.display.value += "*";
}

function btndiv() {
    document.calculator.display.value += "/";
}

function btnmod() {
    document.calculator.display.value += "%";
}

function btndot() {
    document.calculator.display.value += ".";
}

function btnclear() {
    document.calculator.display.value = "";
}
