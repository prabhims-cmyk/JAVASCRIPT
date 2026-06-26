// class having atleast one undefined function - abstract class .It can be defined in sub classes
class Vehicle{
  numberOfWheels(){} // this is abstract class -no defenition
}
class Car extends Vehicle{
    numberOfWheels(){
        console.log("Car has 4 wheels");
    }
}
let v = new Vehicle();
v.numberOfWheels();
let c = new Car();
c.numberOfWheels();
