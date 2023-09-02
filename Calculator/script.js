const buttonsEl = document.querySelectorAll("button");
const inputEl = document.getElementById("input-el");
let firstNumber = "";
let operator = "";
function add(a, b) {
    return a + b
}
function minus(a, b) {
    return a - b
}
function divide() {
    return a / b
}

function multiple(a, b) {
    return a * b
}

function getMod(a, b) {
    return a % b
}
document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (!isNaN(key)) {
        inputEl.value += key;
    } else if (key === "=" || key === "Enter") {
        getResult();
    } else if (key === "Delete" || key === "Backspace") {
        clearInput();
    } else if (key === "+" || key === "-" || key === "*" || key === "/" || key === "%") {
        operator = key;
        inputEl.value += operator;
    }
});

for (let i = 0; i < buttonsEl.length; i++) {
    buttonsEl[i].addEventListener("click", function () {
        const buttonValue = buttonsEl[i].innerText;

        if (!isNaN(buttonValue)) {
            inputEl.value += buttonValue;
        } else if (buttonValue === "=") {
            getResult();
        } else if (buttonValue === "Clear") {
            clearInput();
        } else {
            operator = buttonValue;
            inputEl.value += operator;
        }
    });
}

function clearInput() {
    inputEl.value = "";
    firstNumber = "";
    operator = "";
}

function getResult() {
    const inputValue = inputEl.value;

    if (inputValue.length === 0) {
        alert("Lütfen sayıları girin.");
        return;
    }

    const numbers = inputValue.split(operator);

    if (numbers.length !== 2) {
        alert("Geçersiz işlem.");
        return;
    }

    const num1 = parseFloat(numbers[0]);
    const num2 = parseFloat(numbers[1]);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Geçersiz sayılar.");
        return;
    }

    let result = 0;

    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = minus(num1, num2);
            break;
        case "/":
            if (num2 === 0) {
                alert("Sıfıra bölemezsiniz.");
                return;
            }
            result = divide(num1, num2);
            break;
        case "x":
            result = multiple(num1, num2);
            break;
        case "%":
            if (num2 === 0) {
                alert("Sıfıra bölünemez.");
                return;
            }
            result = getMod(num1, num2);
            break;
    }

    // Sonucu input alanına yazdır
    inputEl.value = result;
    firstNumber = result.toString();
}
