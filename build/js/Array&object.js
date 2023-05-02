"use strict";
let myString = ["paras", "kishor", "naresh"]; // string type inferred
let bio = ["paras", 24, "paras"]; // (string | number)
let mixedData = ["paras", 23, true]; // (string | number | boolean)
myString[0] = 'bhuwan';
myString.push('neeraj');
bio.push(1000);
mixedData.push(false);
console.log(myString);
console.log(bio);
console.log(mixedData);
let test = []; // any type
// Tuple
let myTuple = ["paras", 23, true];
// myTuple[0] = 23 showing error
// objects
let myObj;
myObj = [];
myObj = {};
// myObj = 23; showing error because myObj type is a object
const myDetails = {
    firstName: "paras",
    lastName: "nayal",
    salary: 5000000
};
myDetails.salary = 10;
console.log(myDetails);
