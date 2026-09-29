function add(a,b) // older version
{
    return a+b;
}
let sum = add(2,3);
console.log(sum);

// anonymous functions
let sumOfIntegers = function(c,d){
    return c+d;
}
console.log(sumOfIntegers(2,3));

let testfunction = function(sname){
    console.log("Hello, " + sname);
}
testfunction("Alice");

// arrow Function (anonymous functions)
let sumOfNumbers = (c,d)=>c+d;
console.log(sumOfNumbers(2,3));

let testfuns = (sname)=>sname;
console.log(testfuns("Bob"));

