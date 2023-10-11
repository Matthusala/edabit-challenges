function getLastItem(arr) {
  if (arr.length > 0) {
    return arr[arr.length - 1];
  } else {
    return "Array is empty";
  }
}

console.log(getLastItem([1, 2, 3]));
