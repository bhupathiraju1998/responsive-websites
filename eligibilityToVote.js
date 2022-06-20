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
  // arrayOfPersons
  let arrayOfPersons = JSON.parse(readLine().replace(/'/g, '"'));
  for (let each of arrayOfPersons){
      let ageOfPerson =  each.age;
      if(ageOfPerson >= 18){
          
          console.log(each.name);
      }
  }

  /*
   *Write your code here and log the output.
   */
}
