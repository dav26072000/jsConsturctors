function CarConstructor(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;

  this.fill = function (gallons) {
    this.tank += gallons;
  };

  this.drive = function (distance) {
    let maxDistance = this.tank / this.milesPerGallon;
    if (distance > maxDistance) {
      this.tank = 0;
      this.odometer = maxDistance;
      return `I run out of fuel at ${maxDistance}`;
    } else {
      this.odometer = distance;
      this.tank -= distance * this.milesPerGallon;
      return `Odometer: ${this.odometer} , Tank: ${this.tank}`;
    }
  };

  this.carInfo = function () {
    return `Model :${this.model} `;
  };
}

let carConst = new CarConstructor("bmw", 1);
carConst.fill(500);
console.log(carConst);
console.log(carConst.drive(100));
