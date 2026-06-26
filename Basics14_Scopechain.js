let name = "Prabhi"; //global scope
function displaymarks(){
    let marks = 90; // outer scope
    function show(){
        let age = 15; // inner scope
        console.log("Student Name: "+ name );
        console.log("Student Age: "+ age);
        console.log("Student Marks: "+ marks);
    }
    show();
}
displaymarks();