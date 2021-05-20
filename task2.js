class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  add() {
    return this.num1 + this.num2;
  }
  subtract() {
    return this.num1 - this.num2;
  }
  multiply() {
    return this.num1 * this.num2;
  }
  divide() {
    return this.num1 / this.num2;
  }
}

let calculator = new Calculator(10, 5);
console.log(calculator.add());
