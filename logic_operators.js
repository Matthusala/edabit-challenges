const filterNumbersBetween = (num1, num2, arr) =>
  arr.filter((number) => number > num1 && number < num2);

const myArray = [1, 5, 10, 15, 20, 25];
const lowerLimit = 5;
const upperLimit = 20;

const resultArray = filterNumbersBetween(lowerLimit, upperLimit, myArray);
console.log(resultArray);
