// any

let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
obj.foo();
obj();
obj.bar = 100;
obj = "Hello World";
const n: number = obj;

// Type Annotations on Variables
let myName: string = "Mauricio";

// No type annotation needed -- 'myName' inferred as type 'string'
let myName2 = "Alice";

// Functions
function greet(name: string) {
  console.log("Hello" + name.toUpperCase() + "!!");
}

// Would be a runtime error if executed!
greet(42);

// Object Types
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 0, y: 7 });

// Optional Properties
function printName(obj: { first: string; last?: string }) {
  console.log("Your first name is " + obj.first.toUpperCase());

  if (obj.last !== undefined) {
    console.log("Your last name is " + obj.last.toUpperCase());
  }
}

printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

// Union Types

// TypeScript will only allow an operation if it is valid for every member of the union. 
// For example, if you have the union string | number, 
// you can’t use methods that are only available on string

function printId(id: number | string) {
  console.log("Your ID is: " + id);

//   if (typeof id === "string") {
//     // In this branch, id is of type 'string'
//     console.log(id.toUpperCase());
//   } else {
//     // Here, id is of type 'number'
//     console.log(id);
//   }
}

// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });

// Type Aliases
type Point = {
  x: number;
  y: number;
};

function printCoordAliases(pt: Point) {
    console.log("The coordinate's x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
  }
   
  printCoordAliases({ x: 100, y: 100 });