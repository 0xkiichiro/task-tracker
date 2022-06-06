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
  if (event.target.classList.contains("button") || input.value.keycode === 13) {
    console.log("oi");
    if (day.value === "Pick a day") {
      alert("Pick a day first!");
    } else if (!input.value) {
      alert("Dont play with me, come back when you have a task at hand!");
    }
    //! sort the days
    else if (day.value === "monday") {
      monday.lastElementChild.innerHTML += `<li> ${input.value} </li>`;
    } else if (day.value === "tuesday") {
      tuesday.lastElementChild.innerHTML += `<li> ${input.value} </li>`;
    } else if (day.value === "wednesday") {
      wednesday.lastElementChild.innerHTML += `<li> ${input.value} </li>`;
    } else if (day.value === "thursday") {
      thursday.lastElementChild.innerHTML += `<li> ${input.value} </li>`;
    } else if (day.value === "friday") {
      friday.lastElementChild.innerHTML += `<li> ${input.value} </li>`;
    } else if (day.value === "saturday") {
      saturday.lastElementChild.innerHTML += `<li> ${input.value} </li>`;
    } else if (day.value === "sunday") {
      sunday.lastElementChild.innerHTML += `<li> ${input.value} </li>`;
    }
    input.value = "";
  }
});

//! onload

window.onload = function () {
  input.focus();
};
