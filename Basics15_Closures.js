// closure provides access to an element from its outer scope even after the inner scope is closed
// A closure is a function that remembers variables from its outer scope even
// after the outer function has finished executing.
function greet(){
    let name = "Prabhi";
    function displayname(){   // inner scope
        return "Hello " + name;
    }
    return displayname(); // outer scope
}
const g = greet();
console.log(g);
