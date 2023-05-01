// JavaScript has three very commonly used primitives: string, number, and boolean. Each has a corresponding type in TypeScript.

const myName: string = "paras nayal";
const evenNumber: number = 20;
const isLoggedIn: boolean = false;
const token: any = "paras";

// Arrays
const myArray: number[] = [23, 24, 25];
const nameArray: string[] = [
  "paras",
  "nayal",
  "kishor",
  "bhuwan",
  "naresh",
  "neeraj",
  "vishal",
];

// functions
// Parameter Type Annotations

function greet(message: string) {
  return message;
}
// greet(23);
const greetingMessage = greet("Hi! Good Morning");
console.log(greetingMessage);

// Return Type Annotations
function multiplication(firstNumber: number, secondNumber: number): number {
  return firstNumber * secondNumber;
}
const result = multiplication(2, 3);
console.log(result);

function add(a: number, b: number) {
  return a + b;
}
add(10, 20);

// Object Types
function getCoord(pt: { x: number; y: number }) {
  console.log(pt.x);
  console.log(pt.y);
}
getCoord({ x: 30, y: 40 });

// optional properties
function getDetail(details: { firstName: string; lastName?: string }) {
  console.log(details.firstName);
  console.log(details.lastName);
}
getDetail({ firstName: "paras", lastName: "nayal" });
getDetail({ firstName: "kishor" });

// Union Types

function getID(id: number | string) {
  console.log(id);
}
getID(10);
getID("20");

// Type Aliases
type point = {
    x : number,
    y : number
}
function printCoord (pt:point){
    console.log(pt.x,'a')
    console.log(pt.y,'b')
}
printCoord({x:100,y:200})

// Interfaces
interface bio {
    name:string,
    rollNo :number,
    role : string
}

function giveDetails (obj:bio){
    console.log(obj)
}
giveDetails({name:"paras",rollNo:20,role:"developer"})