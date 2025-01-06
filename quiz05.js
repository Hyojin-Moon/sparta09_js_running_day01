const scores = [36, 62, 72, 55, 86, 95, 92, 48, 81];

function modify(scores) {
  const temp = [];
  for(let i = 0; i < scores.length; i++){
    temp.push(scores[i] += 3);
  }
  return temp;
}

modify(scores);

console.log(scores);
// 기대값: [39, 65, 75, 58, 89, 98, 95, 51, 84]