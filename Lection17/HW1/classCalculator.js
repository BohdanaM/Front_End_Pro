class Calculator {
  add(leftOperand, rightOperand) {
    return leftOperand + rightOperand;
  }

  subtraction(leftOperand, rightOperand) {
    return leftOperand - rightOperand;
  }

  multiply(leftOperand, rightOperand) {
    return leftOperand * rightOperand;
  }

  divide(leftOperand, rightOperand) {
    if (rightOperand === 0) {
      throw new Error("Division by zero is not allowed");
    }
    return leftOperand / rightOperand;
  }
}

const calc = new Calculator();

console.log(calc.add(5, 3)); // 8
console.log(calc.subtraction(10, 4)); // 6
console.log(calc.multiply(3, 6)); // 18
console.log(calc.divide(8, 2)); // 4
