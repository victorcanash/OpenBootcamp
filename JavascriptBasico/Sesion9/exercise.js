const sum = (a, b) => {
  if (!a || !b ||
      typeof(a) != "number" ||
      typeof(b) != "number"){
    throw new Error("Parameters must be numbers");
    return -1;
  }
	return a + b;
};

const num1 = "dew";
const num2 = 2;
try {
  sum(num1, num2);
} catch (e) {
  console.log(e);
}