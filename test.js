console.log("linked");
var currentNum = "";
var memory = "";
var dis = document.getElementById("dis");
var total = "";
var operator = "";

function addNumber(id) {
    // console.log("click");
    // console.log(id);
    // var value = document.getElementById("9").value
    currentNum += id;
    console.log(currentNum);
    dis.value = currentNum;
    // console.log(currentNum.toString());
}

function c() {
    console.log("clear");
    currentNum = "";
    dis.value = "";
    console.log(currentNum);
}

function clearAll() {
    console.log("CE");
    currentNum = "";
    memory = "";
    total = "";
    dis.value = currentNum;
    console.log(memory, total);
}


function operation(value) {
    console.log("click op");
    if (memory !== "") {
        console.log("equals()");
        equals();
        operator = value;
        // memory = total;
        // dis.value = total;
    }
    else {
        console.log("else");
        operator = value;
        memory = currentNum;
        currentNum = "";
        dis.value = memory;
    }
    console.log(memory, operator);
}

function equals() {
    console.log("click =");
    // memory.push(currentNum);
    // for (var i = 0; i < memory.length; i++) {
    console.log("memory", memory);
    if (operator === "+") {
        total = parseFloat(memory, 10) + parseFloat(currentNum, 10);
        // console.log(memory);
        console.log("total", total);
    }
    else if (operator === "-") {
        total = parseFloat(memory, 10) - parseFloat(currentNum, 10);
        console.log(total);
    }
    else if (operator === "*") {
        total = parseFloat(memory, 10) * parseFloat(currentNum, 10);
        console.log(total);
    }
    if (operator === "/") {
        total = parseFloat(memory, 10) / parseFloat(currentNum, 10);
        console.log(total);
    }
    // }
    memory = total;
    currentNum = "";
    operator = "";
    dis.value = total;
}
