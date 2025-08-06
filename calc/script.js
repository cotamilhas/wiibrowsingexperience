var currentInput = "";

function addChar(c) {
    currentInput += c;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    document.getElementById('display').value = currentInput;
}

function calculate() {
    try {
        var result = eval(currentInput);
        if (result === undefined) result = "";
        document.getElementById('display').value = result;
        currentInput = result.toString();
    } catch (e) {
        document.getElementById('display').value = "Erro";
        currentInput = "";
    }
}