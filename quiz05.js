const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

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

function modify(scores) {
  const newScores = scores.forEach((item, index) => {
    scores[index] = calculator(item, "+", 3);
  });
  return newScores;
}

modify(scores);

console.log(scores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]