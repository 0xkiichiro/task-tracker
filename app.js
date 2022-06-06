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

//! capture click

document.querySelector(".container").addEventListener("click", (event) => {
  if (event.target.classList.contains("button")) {
    check();
  }
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
  dayName.lastElementChild.innerHTML += `<li> ${input.value} </li>`;
};

//! onload

window.onload = function () {
  input.focus();
};
