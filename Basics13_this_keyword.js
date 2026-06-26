class Student{
    constructor(sName,sMarks){
        this.sName=sName; // no declaration needed while using 'this' keyword
        this.sMarks=sMarks;
    }
    displaydetails(){
        console.log(this.sName);
        console.log(this.sMarks);
    }

}
let stud = new Student("Prabhi",50);
stud.displaydetails();