`use strict`;
// select elements
const formEl = document.getElementById(`form`);
const formContainerEl = document.getElementById(`form-container`);
const usernameEl = document.getElementById(`username`);
const emailEl = document.getElementById(`email`);
const passwordEl = document.getElementById(`password`);
const messageEl = document.getElementById(`message`);
// const submitEl = document.getElementById(`submit`);

// functions
const displayError = (inputEl, message) => {
  const formContainerEl = inputEl.parentElement;
  formContainerEl.classList.remove(`success`);
  formContainerEl.classList.add(`error`);
  const messageEl = inputEl.querySelector(`.message`);
  messageEl.innerText = message;
};

const displaySuccess = (inputEl) => {
  const formContainerEl = inputEl.parentElement;
  formContainerEl.classList.remove(`error`);
  formContainerEl.classList.add(`success`);
};

// event listeners
formEl.addEventListener(`submit`, (event) => {
  event.preventDefault();

  const username = usernameEl.value.trim();
  const email = emailEl.value.trim();
  const password = passwordEl.value.trim();

  if (!username) {
    displayError(usernameEl, `username is mandatory`);
  } else {
    displaySuccess(usernameEl);
  }
  if (!email) {
    displayError(emailEl, `Email is mandatory`);
  } else {
    displaySuccess(emailEl);
  }
  if (!password) {
    displayError(passwordEl, `password is mandatory`);
  } else {
    displaySuccess(passwordEl);
  }
});
