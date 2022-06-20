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
  // myArray
  let myArray = JSON.parse(readLine().replace(/'/g, '"'));
  let totalSum = 0;
  for (let each of myArray){
      totalSum = totalSum + each;
  }
  console.log(totalSum) ;

  /*
   *Write your code here and log the output.
   */
}
