// All class members are public, by default. This means that they are accessible from outside of the containing class.
// Sometimes it is desirable to provide access to both,
// but you will typically want to control access to the raw data contained in the property by only allowing access through the get or set accessor.
// You can also control access to method functions.

// In TypeScript, you can control the visibility of class members by adding the public, private, or protected keyword before the member name.
// public : If you don't specify an access modifier, the default is public. You can also explicitly set the member to public by using the public keyword.
// private :    If you modify the member with the private keyword, it cannot be accessed from outside of its containing class.
// protected :  The protected modifier acts much like the private modifier with the exception that members declared protected can also be accessed within deriving classes. (You'll learn more about this later in the module.)

// In addition, properties can be made readonly by using the readonly modifier.
// Readonly properties may only be set when initialized at their declaration or in the constructor.

// Note : TypeScript is a structural type system. When you compare two different types, regardless of where they came from,
// if the types of all members are compatible, then we say the types themselves are compatible.
// However, when comparing types that have private and protected members, these types are treated differently.
// For two types to be considered compatible, if one of them has a private member, then the other must have a private member
// that originated in the same declaration. The same applies to protected members.

// Static properties :
// The properties and methods of the classes defined so far are instance properties,
// meaning that they are instantiated and called on each instance of the class object.
// There is another type of property called a static property. Static properties and methods are shared by all instances of a class.
// To make a property static, use the static keyword before a property or method name.

class Car {
  // Properties
  private static numberOfCars: number = 0; // New static property
  private _make: string;
  private _color: string;
  private _doors: number;
  // Constructor
  constructor(make: string, color: string, doors = 4) {
    this._make = make;
    this._color = color;
    if (doors % 2 === 0) {
      this._doors = doors;
    } else {
      throw new Error("Doors must be an even number");
    }
    Car.numberOfCars++; // Increments the value of the static property
  }
  //Accessors
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
  public static getNumberOfCars(): number {
    return Car.numberOfCars;
  }
  accelerate(speed: number): string {
    return `${this.worker()} is accelerating to ${speed} MPH.`;
  }
  brake(): string {
    return `${this.worker()} is braking with the standard braking system.`;
  }
  turn(direction: "left" | "right"): string {
    return `${this.worker()} is turning ${direction}`;
  }
  private worker(): string {
    return this._make;
  }
}

// Instantiate the Car object with all parameters
let myCar1 = new Car("Cool Car Company", "blue", 2);
// Instantiates the Car object with all parameters
let myCar2 = new Car("Galaxy Motors", "blue", 2);
// Returns 2
console.log(Car.getNumberOfCars());
