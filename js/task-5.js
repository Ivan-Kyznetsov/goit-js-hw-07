'use strict';

const btnChangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');
const body = document.body;

btnChangeColor.addEventListener('click', () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColor.textContent = color;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
