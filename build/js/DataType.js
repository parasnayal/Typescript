"use strict";
// JavaScript has three very commonly used primitives: string, number, and boolean. Each has a corresponding type in TypeScript.
const myName = "paras nayal";
const evenNumber = 20;
const isLoggedIn = false;
const token = "paras";
// Arrays
const myArray = [23, 24, 25];
const nameArray = [
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
function greet(message) {
    return message;
}
// greet(23);
const greetingMessage = greet("Hi! Good Morning");
console.log(greetingMessage);
// Return Type Annotations
function multiplication(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}
const result = multiplication(2, 3);
console.log(result);
function add(a, b) {
    return a + b;
}
add(10, 20);
// Object Types
function getCoord(pt) {
    console.log(pt.x);
    console.log(pt.y);
}
getCoord({ x: 30, y: 40 });
// optional properties
function getDetail(details) {
    console.log(details.firstName);
    console.log(details.lastName);
}
getDetail({ firstName: "paras", lastName: "nayal" });
getDetail({ firstName: "kishor" });
// Union Types
function getID(id) {
    console.log(id);
}
getID(10);
getID("20");
function printCoord(pt) {
    console.log(pt.x, 'a');
    console.log(pt.y, 'b');
}
printCoord({ x: 100, y: 200 });
function giveDetails(obj) {
    console.log(obj);
}
giveDetails({ name: "paras", rollNo: 20, role: "developer" });
