'use strict';

const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const email = form.elements.email;
  const password = form.elements.password;
  if (email.value.trim() === '' || password.value.trim() === '') {
    alert('All form fields must be filled in');
    return;
  }
  const userData = {};
  const formData = new FormData(form);
  formData.forEach((value, key) => {
    userData[key] = value.trim();
  });
  console.log(userData);
  form.reset();
});
