// Minimums
// User should be able to enter two numbers and hit equals to get an answer.
// User should be able to chain additional processes.
// Process does not need to follow the order of operations or PEMDAS
// Clear current ( C ) should only clear the number you are currently modifying.
// Clear Equation ( CE ) should reset the entire calculator.

//input - integers and +, -, *, /
//output - the = yeilds the sum, quotient, product, or difference between the two numbers entered

//Need to create encapsulated functions
//Convert input from string to value, and output from value to string, parseInt(runningTotal)
//Keep a running total until cleared by CE,  document.getElementById('input').value = "";
console.log("linked")
var num = "";
var newNum = "";
var sign = "";
var total = document.getElementById("total").text;

// document.getElementById("btn").onclick = function display() {
//     console.log("click");
//     event.preventDefault();
//     num = document.getElementById("btn").innerHTML;
//     document.getElementById("total").innerHTML = document.getElementById("btn").innerHTML;
//     console.log(num);
//worked with button for 9
// };

// document.getElementsByTagName("button").onclick =
function display() {
    console.log("click");
    event.preventDefault();
    var button = document.getElementsByTagName("button").getAttribute("value");
    console.log(button);
    switch (button) {
        case "9":
            document.getElementById("total").innerHTML = document.getElementById("btn").innerHTML;
            console.log("9");
            break;
        case "8":
            document.getElementById("total").innerHTML = document.getElementById("8").innerHTML;
            console.log("8");
            break;
        case "7":
            document.getElementById("total").innerHTML = document.getElementById("7").innerHTML;
            console.log("7");
            break;
    }
}
