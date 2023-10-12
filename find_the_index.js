const findIndex = (arr, target) => {
  return arr.indexOf(target);
};
const array1 = ["apple", "banana", "orange", "grape"];
const result1 = findIndex(array1, "orange");
console.log(result1);

const array2 = ["cat", "dog", "fish", "bird"];
const result2 = findIndex(array2, "dog");
console.log(result2);
