const displayElm = document.querySelector('.display');

const handleDigitClick = (event) => {
  if (displayElm.textContent.length === 9) {
    return;
  }
  const digit = event.target.textContent;
  if (displayElm.textContent === '0') {
    displayElm.textContent = digit;
  } else {
    displayElm.textContent += digit;
  }
};

document.querySelectorAll('.btn-num').forEach((button) => {
  button.addEventListener('click', handleDigitClick);
});
