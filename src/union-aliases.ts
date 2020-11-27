// union types
type Combinable = number | string; // this is type alias

function combine(input1: Combinable, input2: Combinable) {
  let result;

  if (input1 === typeof "number" && input2 === typeof "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
    return result;
  }
}

const combinedAges = combine(1, 1);
console.log(combinedAges);

const combinedNames = combine("Val", "eria");
console.log(combinedNames);
