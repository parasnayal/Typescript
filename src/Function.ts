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
    description :string;
    (someArg:number) : boolean;
}

function doSomething(fn:describableFunction){
    console.log("HI")
    console.log(fn.description);
    console.log('Return value is => ' , fn(1))
}
function isLargeNumber (someArg :number){
    return someArg > 3;
}
isLargeNumber.description = "This is call signature example"
doSomething(isLargeNumber);
greet1(printMessage);