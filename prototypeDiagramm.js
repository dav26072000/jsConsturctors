const arr = [1, 2, 3]; //---proto--> Array.prototype ---proto--> Object.prototype ---proto--> null

const human = {
  isHuman: true, //---proto-->Object.prototype ---proto--> null
};

const str = ""; //---proto-->String.prototype ---proto-->Object.prototype ---proto--> null

const user = {
  name: "Vrezh",
  __proto__: human, //---proto-->human
};

const car = {
  hasEngine: true, //---proto-->Object.prototype ---proto--> null
};

const mercedes = {
  name: "mercedes", //---proto-->car
  __proto__: car,
};

const bmw = Object.create(null); //---proto-->undefined

const emptyObj = {}; //---proto-->Object.prototype ---proto--> null

function fn() {
  console.log("hello, world!"); //---proto-->Function.prototype ---proto-->Object.prototype ---proto--> null
}
const emptyWithoutProto = Object.create(null); //---proto-->undefined
const num = 12; //---proto-->Number.prototype ---proto-->Object.prototype ---proto--> null
const isAuth = false; //---proto-->Boolean.prototype ---proto-->Object.prototype ---proto--> null
