function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Baby(favoriteToy, ...properties) {
  Person.call(this, ...properties);
  Person.prototype = Object.create(Baby.prototype);

  this.favoriteToy = favoriteToy;
  this.play = function () {
    return `playing with ${this.favoriteToy}`;
  };
}

let baby = new Baby("X", "John", 6);
console.log(baby.name);
