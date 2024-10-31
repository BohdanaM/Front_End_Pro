const N = Number(prompt("Input an integer N:"));

if (!isNaN(N)) {
  let results = [];
  for (let i = 1; i <= 100; i++) {
    if (i * i <= N) {
      results.push(i);
    }
  }
  console.log("Numbers:", results.join(", "));
} else {
  console.log("Please enter a valid integer.");
}
