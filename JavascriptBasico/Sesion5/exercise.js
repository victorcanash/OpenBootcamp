const min = 0;
const max = 21;
let numbers = [];

for (let i = 0; i < 10; i++){
  let number = Math.random() * (max - min) + min;
  numbers.push(number);
}

console.log(numbers);