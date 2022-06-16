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

const pointPouch = document.querySelector(".point-counter").lastElementChild;
let pointCounter = 0;
//* short-circuit method: if localStorage is empty send an empty array
let todoArr = JSON.parse(localStorage.getItem("todos")) || [];

//! capture click

document.querySelector("body").addEventListener("click", (event) => {
  if (event.target.classList.contains("add")) {
    check();
  } else if (event.target.classList.contains("pass")) {
    controlCheckboxes();
    pointPouch.innerText = Number(pointPouch.innerText) + pointCounter;
    pointCounter = 0;
  } else if (event.target.classList.contains("fail")) {
    controlCheckboxes();
    pointPouch.innerText = Number(pointPouch.innerText) - pointCounter;
    pointCounter = 0;
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

const readAndRender = function () {
  todoArr.forEach((i) => {
    const { id, content, dayName } = i;
    if (dayName === "monday") {
      printTask(monday, content, id);
    } else if (dayName === "tuesday") {
      printTask(tuesday, content, id);
    } else if (dayName === "wednesday") {
      printTask(wednesday, content, id);
    } else if (dayName === "thursday") {
      printTask(thursday, content, id);
    } else if (dayName === "friday") {
      printTask(friday, content, id);
    } else if (dayName === "saturday") {
      printTask(saturday, content, id);
    } else if (dayName === "sunday") {
      printTask(sunday, content, id);
    }
  });
};

const check = function () {
  const gun = document.querySelector(".select");
  if (day.value === "Pick a day") {
    alert("Pick a day first!");
  } else if (!input.value) {
    alert("Dont play with me, come back when you have a task at hand!");
  } else if (day.value === "monday") {
    createTask();
    printTask(monday, input.value);
  } else if (day.value === "tuesday") {
    createTask();
    printTask(tuesday, input.value);
  } else if (day.value === "wednesday") {
    createTask();
    printTask(wednesday, input.value);
  } else if (day.value === "thursday") {
    createTask();
    printTask(thursday, input.value);
  } else if (day.value === "friday") {
    createTask();
    printTask(friday, input.value);
  } else if (day.value === "saturday") {
    createTask();
    printTask(saturday, input.value);
  } else if (day.value === "sunday") {
    createTask();
    printTask(sunday, input.value);
  }
  input.value = "";
};

function createTask() {
  //* creating an obj for each task
  const ArrObj = {
    id: new Date().getTime(),
    dayName: day.value,
    content: input.value,
  };
  //* pushing this obj to the array
  todoArr.push(ArrObj);
  //* converting the array to JSON and send it to localStorage
  localStorage.setItem("todos", JSON.stringify(todoArr));
}

function printTask(dayName, content, id) {
  dayName.lastElementChild.innerHTML += `<li id="${id}"> ${content} <input type="checkbox" name="checkbox" id="checkbox" /></li>`;
}

const controlCheckboxes = function () {
  const checkboxes = document.querySelectorAll("#checkbox");
  Array.from(checkboxes).forEach((i) => {
    if (i.checked) {
      console.log(i.parentElement.id);
      pointCounter += 10;
      //* capturing the checked checkboxes and removing them from the array
      todoArr = todoArr.filter((todo) => todo.id != i.parentElement.id);
      //* sending the updated array to the localStorage
      localStorage.setItem("todos", JSON.stringify(todoArr));
      i.parentElement.remove();
    }
  });
};

//! onload

window.onload = function () {
  input.focus();
  readAndRender();
  // alert(
  //   "Warning, this project is still in development, there can be bugs and broken components!"
  // );
};
