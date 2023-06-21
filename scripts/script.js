`use strict`;
// select elements
const formEl = document.getElementById(`form`);
const usernameEl = document.getElementById(`username`);
const emailEl = document.getElementById(`email`);
const passwordEl = document.getElementById(`password`);



// functions

// event listeners
formEl.addEventListener(`submit`, (event) => {
event.preventDefault();  
})