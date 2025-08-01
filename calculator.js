// Arithmetic Functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    // Prevent division by zero
    if (number2 === 0) {
        return 'Error (division by zero)';
    }
    return number1 / number2;
}

// Utility Function to Get Input Values
function getInputValues() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return { number1, number2 };
}

// Update Result Display
function updateResult(value) {
    document.getElementById('calculation-result').textContent = value;
}

// Event Listeners
document.getElementById('add').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    updateResult(add(number1, number2));
});

document.getElementById('subtract').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    updateResult(subtract(number1, number2));
});

document.getElementById('multiply').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    updateResult(multiply(number1, number2));
});

document.getElementById('divide').addEventListener('click', function () {
    const { number1, number2 } = getInputValues();
    updateResult(divide(number1, number2));
});
