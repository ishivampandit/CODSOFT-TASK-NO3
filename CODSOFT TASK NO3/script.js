// script.js
let currentInput = '';
let previousInput = '';
let operation = null;

function appendNumber(number) {
  if (currentInput.length >= 10) return; // Limit input length
  currentInput += number.toString();
  updateDisplay();
}

function selectOperation(op) {
  if (currentInput === '') return;
  if (previousInput !== '') calculate();
  operation = op;
  previousInput = currentInput;
  currentInput = '';
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.textContent = currentInput || previousInput || '0';
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operation = null;
  updateDisplay();
}

function calculate() {
  if (previousInput === '' || currentInput === '' || !operation) return;
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);
  let result;
  
  switch (operation) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      result = prev / curr;
      break;
    default:
      return;
  }
  
  currentInput = result.toString();
  previousInput = '';
  operation = null;
  updateDisplay();
}