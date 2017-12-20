// Minimums
// User should be able to enter two numbers and hit equals to get an answer.
// User should be able to chain additional processes.
// Process does not need to follow the order of operations or PEMDAS
// Clear current ( C ) should only clear the number you are currently modifying.
// Clear Equation ( CE ) should reset the entire calculator.

//input - integers and +, -, *, /
//output - the = yeilds the sum, quotient, product, or difference between the two numbers entered

//example:
//Input: 1 +2 => output: 3
//input: 12 * 3 => output: 36
//input: 20 / 5 => output: 4
//input: 7 - 4 => output: 3
//input: 3 + 4 - 2 * 5 => output: 25

//Need to create encapsulated functions
//Convert input from string to value, and output from value to string, parseInt(runningTotal)
//Keep a running total until cleared by CE,  document.getElementById('input').value = "";
