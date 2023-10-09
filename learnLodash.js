function drop(arr, n = 1) {
  if (arr.length === 0) {
    return [];
  }
  return arr.slice(n);
}

const myArray = [1, 2, 3, 4, 5];
const droppedArray = drop(myArray, 2);
console.log(droppedArray);
