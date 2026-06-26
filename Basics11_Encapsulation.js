class Student{
    #marks  // # is used to denote private variables
    constructor(marks){
        this.#marks=marks;
    } 
    getmarks(){
       return this.#marks;
    }
    setmarks(marks){
        this.#marks = marks;
    }    
}
class Prabhi extends Student{
    constructor(marks){
        super(marks);
    }
}

let stud = new Student(80);
console.log(stud.getmarks());
stud.setmarks(100);
console.log(stud.getmarks());

let p = new Prabhi(90);
console.log(p.marks); 

