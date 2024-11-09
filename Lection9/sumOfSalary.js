let company = {
  sales: [
    { name: "John", salary: 1000 },
    { name: "Alice", salary: 600 },
  ],
  development: {
    web: [
      { name: "Peter", salary: 2000 },
      { name: "Alex", salary: 1800 },
    ],
    internals: [{ name: "Jack", salary: 1300 }],
  },
};

function calcSumOfSalary(company) {
  let sumOfSalary = 0;

  for (let department in company) {
    if (Array.isArray(company[department])) {
      company[department].forEach(
        (employee) => (sumOfSalary += employee.salary)
      );
    } else if (typeof company[department] === "object") {
      sumOfSalary += calcSumOfSalary(company[department]);
    }
  }
  return sumOfSalary;
}

console.log(calcSumOfSalary(company));
