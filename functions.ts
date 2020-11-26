// we can explicitly specify a return type by adding a : after the ()
function add(n1: number, n2: number): number {
  return n1 + n2;
}

// void doesn't return anything
function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(1, 2));

// undefined needs a return;
function printUndefined(): undefined {
  console.log(undefined);
  return;
}

printUndefined();

let combinedValue: Function; // takes a function
combinedValue = add;

console.log(combinedValue(1, 2));

let returnTypeFunction: (a: number, b: number) => number; // specifies function type
returnTypeFunction = add;

console.log(add(1, 2));
