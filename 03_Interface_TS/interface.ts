// In TypeScript, interfaces fill the role of naming these types, and are a powerful way of defining a "code contract"
// within your code as well as contracts with code outside of your project.
// What is an interface ?
// You can use interfaces to describe an object, naming and parameterizing the object's types,
// and to compose existing named object types into new ones.

interface Employee {
  firstName: string;
  lastName: string;
  fullName(): string;
}

// Note : the interface doesn't initialize or implement the properties declared within it.
// That's because the only job of an interface is to describe a type.

// example : this implements the interface by declaring a variable of the type Employee. It fulfills the contract by passing in values
// for the firstName and lastName properties and specifying that the fullName method should combine the firstName and lastName properties and return the result.

let employee: Employee = {
  firstName: "Emil",
  lastName: "Andersson",
  fullName(): string {
    return this.firstName + " " + this.lastName;
  },
};

employee.firstName = 10; //* Error - Type 'number' is not assignable to type 'string'

// The Employee interface can also be expressed as a type alias using the type keyword:

type Employee = {
  firstName: string;
  lastName: string;
  fullName(): string;
};

// A type alias is a definition of a type of data, for example, a union, primitive, intersection, tuple, or any other type.
// Interfaces, on the other hand, are a way to describe data shapes, for example, an object. Type aliases can act like interfaces;
// however, there are some subtle differences. The key distinction is that a type alias cannot be reopened to add new properties whereas an interface is always extendable.
// Also, you can only describe a union or tuple using a type alias.
