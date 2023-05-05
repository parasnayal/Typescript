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
    console.log('Return value is => ', fn(1));
}
function isLargeNumber(someArg) {
    return someArg > 3;
}
isLargeNumber.description = "This is call signature example";
doSomething(isLargeNumber);
greet1(printMessage);
