function getfirstElement(array) {
  if (array.length > 0) {
    return array[0];
  } else return null;
}

const myArray = [1, 2, 3, 4, 5];
const firstElement = getFirstElement(myArray);
console.log(firstElement);
