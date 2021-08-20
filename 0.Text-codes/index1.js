


/* 
    Global Execution context-> 
        phase 1=> memory allocation phase in VARIABLE ENVIRONMENT
        phase 2=> execution phase
        
    Global execution context is pushed in stack.

    Hoisting.
*/
getName();  // error, not a function 
getName2(); // Namaste
getName3(); // error, Not a function
console.log(x); // undefined x , because only memory phase has worked , execution phase is running.
console.log(getName); // dumps function definition

var x=7;

var getName = () =>{
    console.log("Namaste");
}

function getName2(){
    console.log("Namaste");
}

var getName3 = function (){
    console.log("Namaste");
}