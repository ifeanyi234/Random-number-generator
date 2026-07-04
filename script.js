"use strict";
const minInput = document.querySelector("#minValue");
const maxInput = document.querySelector("#maxValue");
const generateBtn = document.querySelector("#generateBtn");
const errorMsg = document.querySelector(".error");
const outputNum = document.querySelector("#number");

// Generate Random Number
const generateNum = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Display Random Number
const displayNum = function (num) {
  outputNum.textContent = num;
};

generateBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const minValue = Number(minInput.value);
  const maxValue = Number(maxInput.value);

  // Validate Numbers
  if (!minInput.value || !maxInput.value) {
    errorMsg.textContent = "Please input min & max values before generating!";
    errorMsg.classList.add("active");
  } else if (minValue >= maxValue) {
    errorMsg.textContent = "minimum must be lesser than max!";
    errorMsg.classList.add("active");
  } else {
    errorMsg.classList.remove("active");
    // Call function
    const randomNum = generateNum(minValue, maxValue);
    // Call function
    displayNum(randomNum);
  }
});
