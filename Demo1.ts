let message: string = "Hello";
console.log(message);
//message = 200;
//console.log(message);
let age:number = 20;
console.log(age);

let isActive:boolean = true;
console.log(isActive);

let numbers:number[] = [1,2,3];
console.log(numbers);

let data:any="Hello"; // can store any data type value 
console.log(data);
data = 200;
console.log(data);

function add(a:number,b:number):number{ // function
    return a+b;
}
console.log(add(3,4));

let user:{name:string,age:number}={name:"Bob",age:30}//object
console.log(user);
//user:{location:string}={location="USA"} // external property assignation is not possible in ts
//console.log(user);
/////////////////////////////////
//Git- window based and Github - cloud based site to store data