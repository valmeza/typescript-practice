//core types
let number: number; // all numbers, no differentiation between integers or floats
let word: string; // all text values
let ifTrue: boolean; // truthy or falsy values
let myObject: object; // any js object
let myArray: []; // any js array, type can be flexible or strict
let myTuple: [number, string]; // added by typescript: Fixed-length array
enum Role {
  ADMIN,
  EMPLOYEE,
  CUSTOMER,
  USER,
} // added by typescript: automatically enumerated global constant identifiers
let anything: any; // flexible ** this defeats the purpose of typescript **
