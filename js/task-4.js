'use strict';

const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const allFields = [...form.elements].every(
    element => element.value.trim() !== ''
  );
  if (allFields === false) {
    alert('All form fields must be filled in');
  } else {
    const userData = {};
    const formData = new FormData(form);
    formData.forEach((value, key) => {
      userData[key] = value.trim();
    });
    console.log(userData);
    form.reset();
  }
});
