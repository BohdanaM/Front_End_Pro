const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(array, item) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] !== item) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(removeElement(array, 4));
