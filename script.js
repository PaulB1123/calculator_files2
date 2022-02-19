"use strict";

window.addEventListener("DOMContentLoaded", setUp);
function setUp() {
  document.querySelector("#calculate").addEventListener("click", calcClick);
  document.querySelector("#clear").addEventListener("click", clearClick);
}

function calcClick() {
  console.log("CALC");
  const operatorValue = document.querySelector("#operator").value;
  const firstNumber = Number(document.querySelector("#firstnumber").value);
  const secondNumber = Number(document.querySelector("#secondnumber").value);

  let result;
  console.log("Whats the operator:", operatorValue);
  if (operatorValue === "add") {
    result = firstNumber + secondNumber;
  } else if (operatorValue === "mul") {
    result = firstNumber * secondNumber;
  } else if (operatorValue === "sub") {
    result = firstNumber - secondNumber;
  } else if (operatorValue === "div") {
    result = firstNumber / secondNumber;
  }
  console.log("RESULT", result);
}
function clearClick() {
  console.log("CLEAR");
}
