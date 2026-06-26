// Objects - collection of properties
let person = {
    firstName:'Tim',
    lastName:'Joe',
    age:24,
    fullName:function(){
        console.log(this.firstName+this.lastName);
    }
}
console.log(person.fullName()); 
console.log(person.firstName);
console.log(person.lastName);
console.log(person['lastName']); 

person.firstName = 'Tim Dane'; // can make changes in any of the properties
console.log(person.firstName);
person.gender = 'Male'; // can add new property
console.log(person);
delete person.gender; // delete the property
console.log(person);
console.log('gender' in person); // check whether a property is present in the object
console.log("Keys:  ");
for(let key in person) // key= each item in the object
{
    console.log("Key: " +person[key]);
}
