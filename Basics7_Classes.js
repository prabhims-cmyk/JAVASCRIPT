// Class - contains variables,functions, constructors 
module.exports = class Person{
    age = 25;
    get location(){
        return 'Canada';
    }
    constructor(firstName,lastName){
        this.firstName = firstName; // no need to declare the instance variable 'this.firstName' .It will get automatically  declared when written in the constructor
        this.lastName = lastName; 
    }
    fullName(){
        console.log(this.firstName+" "+this.lastName);
    }
}
/*let person = new Person(); // person is an object of class Person
console.log(person.age);
console.log(person.location); // for get function '()' not needed while calling the function

let person1 = new Person("Tim","Jose");
console.log(person1.fullName());

let person2 = new Person("Chris","Jhones");
console.log(person2.fullName());*/