// Creating a class:
// Create a new class by using the class keyword followed by the class name, Car. By convention, class names are PascalCase.

class Car {
  //You can think of the properties of a class as the raw data that is passed to the object when it's initialized.
  // The properties of the Car class are those that apply to any car, regardless of the specific make or model.
  // For example, these properties may include the make of the car, the color, and the number of doors.
  // Because you're working in TypeScript, you can also apply type attributes to the properties.

  // Properties
  _make: string;
  _color: string;
  _doors: number;

  // Classes in TypeScript create two separate types: the instance type, which defines what members an instance of a class has,
  // and the constructor function type, which defines what members the class constructor function has.
  // The constructor function type is also known as the "static side" type because it includes static members of the class.

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

  // While you can access the class properties directly (they're public, by default),
  // TypeScript supports getters/setters as a way of intercepting access to a property.
  // This gives you finer-grained control over how a member is accessed on each object.
  // To set or return the value of the object's members from code, you must define get and set accessors in the class.

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

  // You can define any TypeScript function within a class and call it as a method on the object or from other functions within the class.
  // These class members describe the behaviors that your class can perform and can perform any other tasks required by the class.
  // Define these four methods for the Car class: accelerate, brake, turn, and worker.
  // You'll notice that there's no function keyword. This isn't required or allowed when defining functions in a class,
  // so it helps you keep the syntax succinct.

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
  worker(): string {
    return this._make;
  }
}

let myCar1 = new Car("Cool Car Company", "blue", 2); // Instantiates the Car object with all parameters
console.log(myCar1.color);
console.log(myCar1._color);

let myCar2 = new Car("Galaxy Motors", "red", 3);
console.log((myCar2.doors = 5)); // throws an error

let myCar3 = new Car("Galaxy Motors", "gray");
console.log(myCar3.doors); // returns 4, the default value

// Test the methods by sending the return values to the console.
console.log(myCar1.accelerate(35));
console.log(myCar1.brake());
console.log(myCar1.turn("right"));
