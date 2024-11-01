let arr = ["6", 1, 3, "l", { d: 1 }, null, 1, 5, undefined];

function calcAverage(arr) {
  const numbers = arr.filter((item) => typeof item === "number");

  let sum = 0;
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    count++;
  }

  if (count === 0) return null;

  return sum / count;
}

console.log(calcAverage(arr));
