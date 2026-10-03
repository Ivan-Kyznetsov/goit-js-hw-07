'use strict';

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener('input', () => {
  const inputName = input.value.trim();
  if (inputName === '') {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = inputName;
  }
});
