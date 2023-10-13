function convertArrayItemsToString(arr) {
  return arr.map(String);
}

const myArray = [1, 2, 3, 4, 5];

const stringArray = convertArrayItemsToString(myArray);
console.log(stringArray);
