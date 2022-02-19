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
  console.log(operatorValue);

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

  let numberOfDecimals = 0;

  console.log("checked", document.querySelector("#doround").checked);
  if (document.querySelector("#doround").checked) {
    numberOfDecimals = document.querySelector("#decimals").value;
  }

  console.log("numberOfDecimals", numberOfDecimals);
  console.log("typeOf numberOfDecimal", typeof numberOfDecimals);
  console.log("RESULT", result.toFixed(numberOfDecimals));
}

function clearClick() {
  document.getElementById("firstnumber").value = "";
  document.getElementById("secondnumber").value = "";
  console.log("CLEAR");
}
