class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  compareAge(person) {
    if (this.age > person.age) {
      return `${this.name} is older than ${person.name}`;
    } else if (this.age < person.age) {
      return `${this.name} is younger than ${person.name}`;
    } else {
      return `${this.name} is the same age as ${person.name}`;
    }
  }
}

let john = new Person("John", 5);
let carl = new Person("Carl", 10);
console.log(john.compareAge(carl));
