let word = "global";

let printWord = function() {
  let word = "local";
  console.log(word);
}

printWord();

console.log(word);