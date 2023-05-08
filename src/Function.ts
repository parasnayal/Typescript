console.log("===> More about the function <===");
// Function Type Expression => The simplest way to describe a function is with a function type expression.
// function greet(greetFunction: (message: string) => void) {
//   greetFunction("Hello! Paras Good Morning");
// }

type greetFunction = (message: string) => void;
function greet1(greetFunction: greetFunction) {
  greetFunction("Hello! Paras ");
}
function printMessage(message: string) {
  console.log(message);
}

// Call Signatures => In Javascript , function can have properties in addition to being callable.Function type expression syntax doesn't allow for declaring properties.If we want to describe something callable with properties,we can write call signature in an object type.
type describableFunction = {
  description: string;
  (someArg: number): boolean;
};

function doSomething(fn: describableFunction) {
  console.log("HI");
  console.log(fn.description);
  console.log("Return value is => ", fn(1));
}
function isLargeNumber(someArg: number) {
  return someArg > 3;
}
isLargeNumber.description = "This is call signature example";
doSomething(isLargeNumber);
greet1(printMessage);

// Generic Functions => generics are used when we want to describe a correspondence between two values. We do this by declaring a type parameter in the function signature:

function firstElement<Type>(arr: Type[]): Type | undefined {
  return arr[0];
}
// By adding a type parameter Type to this function and using it in two places, we’ve created a link between the input of the function (the array) and the output (the return value).

// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);

// Note that we didn’t have to specify Type in this sample. The type was inferred - chosen automatically - by TypeScript.

// Constraint => In TypeScript we can apply constraints on Generic type parameters (e.g. T) by using keyword extends (e.g. T extends Serializable).

interface Shape {
  draw():any;
}

function drawShapes <S extends Shape> (shape : S[]) : void{
shape.forEach(s=>s.draw());
}
class circle implements Shape{
  draw() {
    console.log("Drawing circle")
  }
}

class Rectangle implements Shape{
  draw() {
  console.log("Drawing Rectangle");
  }
}
const newCircle = new circle();
const newRectangle = new Rectangle();
// drawShapes([newCircle,newRectangle])
drawShapes<circle | Rectangle>([newCircle,newRectangle])
// drawShapes(["paras","nayal"])

function getProp<T,k extends keyof T>(key:k,obj:T){
  return obj[key];
}
const obj = {a:1,b:2,c:3};
let prop = getProp('c',obj);
console.log(prop)


// Declaring this in a Function
const user = {
  id: 123,
 
  admin: false,
  becomeAdmin: function () {
    this.admin = true;
  },
};
console.log(user)
console.log(user.becomeAdmin())
console.log(user)

// unknown => The unknown type represents any value. This is similar to the any type, but is safer because it’s not legal to do anything with an unknown value:

function f1(a: any) {
  a.b(); // OK
}
function f2(a: unknown) {
  // a.b();
// 'a' is of type 'unknown'.
}