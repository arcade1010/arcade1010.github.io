window.onload = function () {
    // Add event listeners to the buttons
    document.getElementById("btn7").addEventListener("click", function() {
        showNum('7');
    });
    document.getElementById("btn8").addEventListener("click", function() {
        showNum('8');
    });
    document.getElementById("btn9").addEventListener("click", function() {
        showNum('9');
    });
    document.getElementById("btnClear").addEventListener("click", clearDisplay);
    document.getElementById("btn4").addEventListener("click", function() {
        showNum('4');
    });
    document.getElementById("btn5").addEventListener("click", function() {
        showNum('5');
    });
    document.getElementById("btn6").addEventListener("click", function() {
        showNum('6');
    });
    document.getElementById("btnAdd").addEventListener("click", function() {
        showNum('+');
    });
    document.getElementById("btn1").addEventListener("click", function() {
        showNum('1');
    });
    document.getElementById("btn2").addEventListener("click", function() {
        showNum('2');
    });
    document.getElementById("btn3").addEventListener("click", function() {
        showNum('3');
    });
    document.getElementById("btnSubtract").addEventListener("click", function() {
        showNum('-');
    });
    document.getElementById("btn0").addEventListener("click", function() {
        showNum('0');
    });
    document.getElementById("btnDecimal").addEventListener("click", function() {
        showNum('.');
    });
    document.getElementById("btnEqual").addEventListener("click", calculateResult);
    document.getElementById("btnMultiply").addEventListener("click", function() {
        showNum('*');
    });
    document.getElementById("btnDivide").addEventListener("click", function() {
        showNum('/');
    });
}

function showNum(value) {
    document.formCalculator.textNumber.value += value;
}

function clearDisplay() {
    document.formCalculator.textNumber.value = "";
}

function calculateResult() {
    try {
        const result = eval(document.formCalculator.textNumber.value);
        document.formCalculator.textNumber.value = result;
    } catch (error) {
        document.formCalculator.textNumber.value = "Error";
    }
}
