window.onload = function () {
    document.getElementById("text1").value = getRandomInt(10);
    document.getElementById("text2").value = getRandomInt(10);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

console.log(getRandomInt(11));

function changeNbr(elementId, change) {
    let input = document.getElementById(elementId);
    input.value = parseInt(input.value) + change;
}

function calculate() {
    let mark = document.getElementById("dropdown").value;
    let num1 = document.getElementById("text1").value;
    let num2 = document.getElementById("text2").value;
    let tulostus = document.getElementById("tulos");
    let tulos;
    if (mark == "1") {
        tulos = parseInt(num1) + parseInt(num2);
    }
    else if (mark == "2") {
        tulos = parseInt(num1) - parseInt(num2);
    }
    else if (mark == "3") {
        tulos = parseInt(num1) * parseInt(num2);
    }
    else if (mark == "4") {
        tulos = parseInt(num1) / parseInt(num2);
    }
    tulostus.value = parseInt(tulos);
}