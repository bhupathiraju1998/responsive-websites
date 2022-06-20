"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((str) => str.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}

function main() {
  // arrayOfScores
  let arrayOfScores = JSON.parse(readLine().replace(/'/g, '"'));
  let calculateTotalScore = function(){
      let totalvalue = 0;
      for (let each of arrayOfScores){
          totalvalue = totalvalue + each;
      }
      return totalvalue;
  };

  /*
   * Write your code here and return the output.
   */
  let totalScore = calculateTotalScore(arrayOfScores);
  console.log(totalScore);
}
