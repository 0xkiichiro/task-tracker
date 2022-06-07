//! declare variables
const input = document.querySelector(".input");
const day = document.querySelector(".select");

const monday = document.querySelector(".monday");
const tuesday = document.querySelector(".tuesday");
const wednesday = document.querySelector(".wednesday");
const thursday = document.querySelector(".thursday");
const friday = document.querySelector(".friday");
const saturday = document.querySelector(".saturday");
const sunday = document.querySelector(".sunday");

const checkboxes = document.querySelectorAll("#checkbox");
const pointCounter = document.querySelector(".point-counter");

//! capture click

document.querySelector("body").addEventListener("click", (event) => {
  if (event.target.classList.contains("add")) {
    check();
  } else if (event.target.classList.contains("pass")) {
    controlCheckboxes();
  } else if (event.target.classList.contains("fail")) controlCheckboxes();
});

//! capture keydown

document
  .querySelector(".container")
  .addEventListener("keydown", (pressedKey) => {
    if (pressedKey.keyCode === 13) {
      check();
    }
  });

//! functions

const check = function () {
  const gun = document.querySelector(".select");
  if (day.value === "Pick a day") {
    alert("Pick a day first!");
  } else if (!input.value) {
    alert("Dont play with me, come back when you have a task at hand!");
  } else if (day.value === "monday") {
    printTask(monday);
  } else if (day.value === "tuesday") {
    printTask(tuesday);
  } else if (day.value === "wednesday") {
    printTask(wednesday);
  } else if (day.value === "thursday") {
    printTask(thursday);
  } else if (day.value === "friday") {
    printTask(friday);
  } else if (day.value === "saturday") {
    printTask(saturday);
  } else if (day.value === "sunday") {
    printTask(sunday);
  }
  input.value = "";
};

const printTask = function (dayName) {
  dayName.lastElementChild.innerHTML += `<li> ${input.value} <input type="checkbox" name="checkbox" id="checkbox" /></li>`;
};

const controlCheckboxes = function () {
  Array.from(checkboxes).forEach((i) => {
    if (i.checked) {
      console.log(i.parentElement);
      i.parentElement.remove();
    }
  });
};

//! onload

window.onload = function () {
  input.focus();
  //* comment out after WIP is done
  // alert(
  //   "Warning, this project is still in development, there can be bugs and broken components!"
  // );
};
