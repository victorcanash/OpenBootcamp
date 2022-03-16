const sum = (a, b) => {
  if (typeof(a) != 'number' ||
      typeof(b) != 'number' ||
      Number.isNaN(a) || 
      Number.isNaN(b)){
    console.log("Bad parameters, insert two numbers");
    return NaN;
  }
  return a + b;
};

const subtract = (a, b) => {
  if (typeof(a) != 'number' ||
      typeof(b) != 'number' ||
      Number.isNaN(a) || 
      Number.isNaN(b)){
    console.log("Bad parameters, insert two numbers");
    return NaN;
  }
  return a - b;
};

const multiply = (a, b) => {
  if (typeof(a) != 'number' ||
      typeof(b) != 'number' ||
      Number.isNaN(a) || 
      Number.isNaN(b)){
    console.log("Bad parameters, insert two numbers");
    return NaN;
  }
  return a * b;
};

const divide = (a, b) => {
  if (typeof(a) != 'number' ||
      typeof(b) != 'number' ||
      Number.isNaN(a) || 
      Number.isNaN(b)){
    console.log("Bad parameters, insert two numbers");
    return NaN;
  } else if (b == 0){
    console.log("Bad parameters, cannot divide by 0")
  }
  return a / b;
};