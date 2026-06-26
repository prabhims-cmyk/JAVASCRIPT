// overloading is not there in js only overridding is there
class A{
    display(){
        console.log("Inside class A");
    }
}
class B extends  A{
    display(){
        console.log("Inside class B"); // display is overridden by B
    }
}
let a = new A();
a.display();
let b = new B();
b.display();