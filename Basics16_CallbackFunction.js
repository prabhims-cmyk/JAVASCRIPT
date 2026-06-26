// Functions can be passed as the parameters of another function, then such function is known as callback function
function greet(name,callback){
    console.log("Hello "+name );
    callback();
    
}
function callme(){
    console.log("I am a callback function");
}
greet("Prabhi",callme); // callme is the call back function

