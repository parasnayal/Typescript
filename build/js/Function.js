"use strict";
console.log("===> More about the function <===");
function greet1(greetFunction) {
    greetFunction("Hello! Paras ");
}
function printMessage(message) {
    console.log(message);
}
function doSomething(fn) {
    console.log("HI");
    console.log(fn.description);
    console.log("Return value is => ", fn(1));
}
function isLargeNumber(someArg) {
    return someArg > 3;
}
isLargeNumber.description = "This is call signature example";
doSomething(isLargeNumber);
greet1(printMessage);
// Generic Functions => generics are used when we want to describe a correspondence between two values. We do this by declaring a type parameter in the function signature:
function firstElement(arr) {
    return arr[0];
}
// By adding a type parameter Type to this function and using it in two places, we’ve created a link between the input of the function (the array) and the output (the return value).
// s is of type 'string'
const s = firstElement(["a", "b", "c"]);
// n is of type 'number'
const n = firstElement([1, 2, 3]);
// u is of type undefined
const u = firstElement([]);
function drawShapes(shape) {
    shape.forEach(s => s.draw());
}
class circle {
    draw() {
        console.log("Drawing circle");
    }
}
class Rectangle {
    draw() {
        console.log("Drawing Rectangle");
    }
}
const newCircle = new circle();
const newRectangle = new Rectangle();
// drawShapes([newCircle,newRectangle])
drawShapes([newCircle, newRectangle]);
// drawShapes(["paras","nayal"])
function getProp(key, obj) {
    return obj[key];
}
const obj = { a: 1, b: 2, c: 3 };
let prop = getProp('c', obj);
console.log(prop);
// Declaring this in a Function
const user = {
    id: 123,
    admin: false,
    becomeAdmin: function () {
        this.admin = true;
    },
};
console.log(user);
console.log(user.becomeAdmin());
console.log(user);
// unknown => The unknown type represents any value. This is similar to the any type, but is safer because it’s not legal to do anything with an unknown value:
function f1(a) {
    a.b(); // OK
}
function f2(a) {
    // a.b();
    // 'a' is of type 'unknown'.
}
