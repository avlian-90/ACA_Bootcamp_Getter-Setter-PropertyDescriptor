/* - The input is object, which `keys` are student's names and `values` are `array` of their scores. Find the student with the best average score.

getBestStudent({
  John: [100, 90, 80],
  Bob: [100, 70, 80],
});
// OUTPUT => "John"

// John's avg = 90
// Bob's avg = 83.33 */


function getBestStudent(obj) {
    let maxScore = 0;
    let bestStudent;
    for (key in obj) {
      let sum = 0;
      let average;
      for(let i = 0; i < obj[key].length; i++) {
        sum += obj[key][i];
      }
      average = sum / obj[key].length;
      console.log(average);
      if (average > maxScore) {
        maxScore = average;
        bestStudent = key;
      }
    }
    return bestStudent;
}

console.log(getBestStudent({
    John: [100, 90, 80],
    Bob: [100, 70, 80], 
}));


