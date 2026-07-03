"use strict";
const minInput = document.querySelector("#minValue");
const maxInput = document.querySelector("#maxValue");
const generateBtn = document.querySelector("#generateBtn");
const errorMsg = document.querySelector(".error");
const outputNum = document.querySelector("#number");

generateBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const minValue = +minInput.value; // i decided to use this instead of parseInt, tell me is this better or worse
  const maxValue = +maxInput.value;

  // Validate Numbers
  if ((maxValue && minValue) === 0) {
    errorMsg.textContent = "Please input min & max values before generating!";
    errorMsg.classList.add("active");
  } else if (minValue >= maxValue) {
    errorMsg.textContent = "minimum must be lesser than max!";
    errorMsg.classList.add("active");
  } else {
    errorMsg.classList.remove("active");

    // Generate Random Number
    const generateNum = function (min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    };
    const randomNum = generateNum(minValue, maxValue);

    // Display Random Number
    const displayNum = function (num) {
      outputNum.textContent = num;
    };
    displayNum(randomNum);
  }
});
