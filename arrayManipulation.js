function incrementItems(arr) {
  return arr.map((item) => item + 1);
}

const result1 = incrementItems([0, 1, 2, 3]); // [1, 2, 3, 4]
console.log(result1);
