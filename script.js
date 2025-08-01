let display = document.getElementById('display');
let current = '';

function append(value) {
  if (display.innerText === '0' && value !== '.') {
    current = value;
  } else {
    current += value;
  }
  display.innerText = current;
}

function clearScreen() {
  current = '';
  display.innerText = '0';
}

function backspace() {
  current = current.slice(0, -1);
  display.innerText = current || '0';
}

function calculate() {
  try {
    let result = eval(current.replace('%', '/100'));
    display.innerText = result;
    current = result.toString();
  } catch (e) {
    display.innerText = 'Error';
    current = '';
  }
}
