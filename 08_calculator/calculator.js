const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((sum, current) => sum+current, 0);
};

const multiply = function(array) {
  return array.reduce((mult, current) => mult * current, 1);
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
	if (a == 0) return 1;
  let newNum = 1;
  for (let i = a; i > 0; i--) {
    newNum *= i;
  };
  return newNum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
