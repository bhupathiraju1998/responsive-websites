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

/* Please do not modify anything above this line */

function findFirstStringOccurrence(myArray) {
    let result = myArray.find(function(each){
        if (typeof(each) === "string"){
            return true;
        }
        else{
            return false;
        }
    });
    return result;
  /*
   * Write your code here and return the output.
   */
}

/* Please do not modify anything below this line */

function main() {
  let myArray = JSON.parse(readLine().replace(/'/g, '"'));
  
  let firstStringVal = findFirstStringOccurrence(myArray);
  console.log(firstStringVal);
}