let display = document.getElementById("display");
let currentNumbersArray = [];
let currentNumber = "";
let result = "";
let currentOperator = "";

document.querySelectorAll(".number").forEach(function (numberButton) {
  numberButton.addEventListener("click", function (e) {
    currentNumber += e.target.value;
    console.log(currentNumbersArray);
    console.log(currentNumber);
    display.innerHTML += e.target.value;
  });
});

document.getElementById("clear").addEventListener("click", function () {
  display.innerHTML = "";
  currentNumbersArray = [];
  console.log(currentNumbersArray);
  currentNumber = "";
});

document.querySelectorAll(".operator").forEach(function (operatorButton) {
  operatorButton.addEventListener("click", function (e) {
    currentNumbersArray.push(currentNumber);
    currentNumbersArray.push(e.target.value); // add the operator to the array
    currentNumber = "";
    display.innerHTML = "";
    console.log(currentNumbersArray);
    currentOperator = e.target.value;
  });
});

document.getElementById("equals").addEventListener("click", function () {
  result = parseFloat(currentNumbersArray[0]); // convert the first element to a number
  for (let i = 1; i < currentNumbersArray.length; i += 2) {
    // iterate over the array in pairs (numbers and operators)
    let num = parseFloat(currentNumbersArray[i]); // convert the current element to a number
    let operator = currentNumbersArray[i + 1]; // get the operator from the next element
    if (operator === "+") {
      result += num;
    } else if (operator === "-") {
      result -= num;
    } else if (operator === "*") {
      result *= num;
    } else if (operator === "/") {
      result /= num;
    }
  }
  display.innerHTML = result; // display the result
});
