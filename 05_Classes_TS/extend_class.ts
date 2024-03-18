interface Vehicle {
  make: string;
  color: string;
  doors: number;
  accelerate(speed: number): string;
  brake(): string;
  turn(direction: "left" | "right"): string;
}

class Car implements Vehicle {
  // Properties
  _make: string;
  _color: string;
  _doors: number;
  // Constructor
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be an even number");
    }
  }
  // Accessors
  get make() {
    return this._make;
  }
  set make(make) {
    this._make = make;
  }
  get color() {
    return "The color of the car is " + this._color;
  }
  set color(color) {
    this._color = color;
  }
  get doors() {
    return this._doors;
  }
  set doors(doors) {
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be an even number");
    }
  }
  // Methods
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`;
  }
  brake(): string {
    return `${this.worker()} is braking with the standard braking system.`;
  }
  turn(direction: "left" | "right"): string {
    return `${this.worker()} is turning ${direction}`;
  }
  // This function performs work for the other method functions
  protected worker(): string {
    return this._make;
  }
}

class ElectricCar extends Car {
  // Properties unique to ElectricCar
  private _range: number;

  // Constructor
  constructor(make: string, color: string, range: number, doors = 2) {
    super(make, color, doors);
    this._range = range;
  }

  // Accessors
  get range() {
    return this._range;
  }
  set range(range) {
    this._range = range;
  }

  // Methods
  charge() {
    console.log(this.worker() + " is charging.");
  }
  // Overrides the brake method of the Car class
  brake(): string {
    return `${this.worker()}  is braking with the regenerative braking system.`;
  }
}

let spark = new ElectricCar("Spark Motors", "silver", 124, 2);
let eCar = new ElectricCar("Electric Car Co.", "black", 263);
console.log(eCar.doors); // returns the default, 2
spark.charge(); // returns "Spark Motors is charging"
console.log(spark.brake()); // returns "Spark Motors is braking with the regenerative braking system"
