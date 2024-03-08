// To declare an interface, start with the interface keyword followed by the interface name (the identifier.)
// The interface name may not be one of the predefined type names in the type system. And, by convention, interface names are in PascalCase.
// Note: The TypeScript coding guidelines suggest interfaces should not start with the letter I. for more details : `https://learn.microsoft.com/en-us/training/modules/typescript-implement-interfaces/3-declare-instantiate-interface`

// Declaring :
interface IceCream {
  flavor: string;
  scoops: number;
  instructions?: string;
}

// Implement : Let's start by using the IceCream interface as a type in a variable declaration.
// Declare a new variable called myIceCream as type IceCream and then assign values to the required properties

let myIceCream: IceCream = {
  flavor: "vanilla",
  scoops: 2,
};

console.log(myIceCream.flavor);

// Function : `tooManyScoops` that uses the IceCream interface as parameter type.

function tooManyScoops(dessert: IceCream) {
  if (dessert.scoops >= 4) {
    return dessert.scoops + " is too many scoops!";
  } else {
    return "Your order will be ready soon!";
  }
}

console.log(tooManyScoops({ flavor: "vanilla", scoops: 5 }));

// Extended Interfaces
// Interfaces can extend each other. This enables you to copy the members of one interface into another,
// giving you more flexibility in how you separate your interfaces into reusable components.
// When extending an interface with one or more interfaces, these rules apply: you must implement all the required properties from all interfaces.
// 1. Two interfaces can have the same property if the property has the exact same name and type.
// 2. If two interfaces have a property with the same name but different types,
// you must declare a new property such that the resulting property is a subtype of both interfaces.

interface Sundae extends IceCream {
  sauce: "chocolate" | "caramel" | "strawberry";
  nuts?: boolean;
  whippedCream?: boolean;
  instructions?: string;
}

let myIceCream: Sundae = {
  flavor: "vanilla",
  scoops: 2,
  sauce: "caramel",
  nuts: true,
};

function tooManyScoops(dessert: Sundae) {
  if (dessert.scoops >= 4) {
    return dessert.scoops + " is too many scoops!";
  } else {
    return "Your order will be ready soon!";
  }
}
console.log(tooManyScoops({ flavor: "vanilla", scoops: 5, sauce: "caramel" }));
