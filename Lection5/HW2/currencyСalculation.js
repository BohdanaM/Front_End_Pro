const rateOfDollar = 26;

for (let dollars = 10; dollars <= 100; dollars += 10) {
  const hryvnias = dollars * rateOfDollar;
  console.log(`${dollars} доларів = ${hryvnias} гривень`);
}
