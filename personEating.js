class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
  eat(...food) {
    if (food.length > 10) {
      let foodRemCount = food.length - 10;
      console.log(food.splice(-foodRemCount));
    }

    if (this.stomach.length < 10) {
      this.stomach.push(...food);
      return "food was eated";
    } else {
      return "need to poop";
    }
  }
  poop() {
    this.stomach = [];
    return "ooh yeah";
  }
  toString() {
    return `${this.name}  ${this.age}`;
  }
}

let john = new Person("John", 5);
let carl = new Person("Carl", 10);
console.log(
  john.eat(
    "apple",
    "bob",
    "narek",
    "narek",
    "narek",
    "narek",
    "narek",
    "narek",
    "narek",
    "narek",
    "narek",
    "narek",
    "narek"
  )
);

console.log(john.stomach);
console.log(john.poop());
console.log(john.stomach);
console.log(john.toString());
