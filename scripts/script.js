`use strict`;
// select elements
const formEl = document.getElementById(`form`);
const formContainerEl = document.getElementById(`form-container`);
const usernameEl = document.getElementById(`username`);
const emailEl = document.getElementById(`email`);
const passwordEl = document.getElementById(`password`);
const confirmPasswordEl = document.getElementById(`confirm-password`);
const messageEl = document.getElementById(`message`);

// functions
// regex- for email validation
function isEmailAddress(str) {
  const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return pattern.test(str); // returns a boolean
}

const displayError = (inputEl, message) => {
  const formContainerEl = inputEl.parentElement;
  formContainerEl.classList.remove(`success`);
  formContainerEl.classList.add(`error`);
  const messageEl = formContainerEl.querySelector(`.message`);
  messageEl.innerText = message;
};

const displaySuccess = (inputEl) => {
  const formContainerEl = inputEl.parentElement;
  formContainerEl.classList.remove(`error`);
  formContainerEl.classList.add(`success`);
};

const checkLength = (inputEl, minLength, maxLength) => {
  const message = `${inputEl.name} must be ${minLength} characters`;
  if (inputEl.value.trim().length < minLength) {
    displayError(inputEl, message);
  } else if (inputEl.value.trim().length > maxLength) {
    displayError(inputEl, message);
    const message = `${inputEl.name}must be ${maxLength} characters`;
  } else {
    displaySuccess(inputEl);
  }
};

// event listeners
formEl.addEventListener(`submit`, (event) => {
  event.preventDefault();

  const username = usernameEl.value.trim();
  const email = emailEl.value.trim();
  const password = passwordEl.value.trim();
  const confirmPassword = confirmPasswordEl.value.trim();

  if (!username) {
    displayError(usernameEl, `username is mandatory`);
  } else {
    // displaySuccess(usernameEl);
    checkLength(usernameEl, 5, 12);
  }
  if (!email) {
    displayError(emailEl, `Email is mandatory`);
  } else if (!isEmailAddress(email)) {
    displayError(emailEl, `Enter a valid email address`);
  } else {
    displaySuccess(emailEl);
  }
  if (!password) {
    displayError(passwordEl, `password is mandatory`);
  } else {
    // displaySuccess(passwordEl);
    checkLength(passwordEl, 8, 16);
  }
  if (!confirmPassword) {
    displayError(confirmPasswordEl, `confirm password is mandatory`);
  } else if (confirmPassword !== password) {
    displayError(confirmPasswordEl, `confirm password is not matching`);
  } else {
    displaySuccess(confirmPasswordEl);
  }
});