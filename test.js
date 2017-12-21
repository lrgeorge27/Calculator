console.log("linked");
var currentNum = "0";
var memory = "";
var dis = document.getElementById("dis");

function addNumber(id) {
    console.log("click");
    console.log(id);
    // var value = document.getElementById("9").value
    currentNum = id;
    console.log(currentNum);
    dis.value += currentNum;
    // console.log(currentNum.toString());
}
