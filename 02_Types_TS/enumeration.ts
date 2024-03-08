// Enumerations offer an easy way to work with sets of related constants.
// An enum is a symbolic name for a set of values.
// Enumerations are treated as data types, and you can use them to create sets of constants for use with variables and properties. eg.., below.

// before
// enum ContractStatus {
//     Permanent,
//     Temp,
//     Apprentice,
//   }

// By default, enum values begin with a value of 0, so Permanent is 0, Temp is 1, and Apprentice is 2.
// If you want the values to start with a different value, in this case 1, specify that in the enum declaration.
// Make the following edits to have the enum start the values at 1.

// after
enum ContractStatus {
  Permanent = 1,
  Temp,
  Apprentice,
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);
