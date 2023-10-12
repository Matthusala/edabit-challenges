const arrayToString = (arr) => {
  return arr.join("");
};

const result1 = arrayToString([1, 2, 3]);
console.log(result1);

const result2 = arrayToString(["a", "b", "c"]);
console.log(result2);

const result3 = arrayToString([1, "a", 2, "b"]);
console.log(result3); 
