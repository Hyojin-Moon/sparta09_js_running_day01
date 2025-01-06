function calculator(num1, operator, num2) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if(operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } 
}

console.log(calculator(3, "+", 6)); // 결과값 9
console.log(calculator(11, "-", 6)); // 결과값 5
console.log(calculator(6, "*", 3)); // 결과값 18
console.log(calculator(15, "/", 3)); // 결과값 5