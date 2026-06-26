const Person = require("./Basics7_Classes");// either using required statement or import statement js ->required, typescript - import

class Pet extends Person{
    get location(){
        return "USA"; // overrides canada
    }
    constructor(firstName,lastName){
        super(firstName,lastName);
    }
}
let pet = new Pet("Sam","San");
console.log(pet.fullName());
console.log(pet.location);
console.log(pet.age);