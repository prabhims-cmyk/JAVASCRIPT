//Hoisting- moving all declarations to the top 
class Employee{
    
    display(){
        let empid = "E001";
        console.log("Employee Details "+empid);
    }
}
let employ = new Employee();
employ.display();