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
  // arrayOfFriends
  let arrayOfFriends = JSON.parse(readLine().replace(/'/g, '"'));
  let noOfFriends = arrayOfFriends.length;
  let getPreferredGameMode = function(noOfFriends){
      if (noOfFriends > 1){
          return "Squad";
      }
      else if(noOfFriends === 1){
          return "Dual";
      }
      else if(noOfFriends === 0){
          return "Solo";
      }
  };

  /*
   * Write your code here and return the output.
   */

  let gameMode = getPreferredGameMode(noOfFriends);
  console.log(gameMode);
}
