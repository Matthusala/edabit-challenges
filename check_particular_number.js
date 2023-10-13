function containsNumber(arr, number) {
  return arr.includes(number);
}

const myArray = [1, 2, 3, 4, 5];
const targetNumber = 3;

if (containsNumber(myArray, targetNumber)) {
  console.log(`The array contains ${targetNumber}.`);
} else {
  console.log(`The array does not contain ${targetNumber}.`);
}
