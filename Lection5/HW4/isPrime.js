const number = Number(prompt("Input an integer:"));

if (isNaN(number) || number <= 1) {
  console.log("Please enter a valid integer > than 1");
} else {
  let isPrime = true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  console.log(
    isPrime ? `${number} is a prime number` : `${number} is not a prime number`
  );
}
