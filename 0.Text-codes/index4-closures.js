// function x(){
//     let a=7;
//     function y(){
//         console.log(a);
//     } 
//     return y;
// }
// var z = x();
// console.log(z);

/*
    the execution context of x has finished and function y 
    should not remember about lexical environment of its parent.
    But this is not the case
    returned function y remebers that it has a value of variable a as 7
    Function binds that value.
    In summary, when you return function, a closure is returned.
    closure= function+its lexical environment.
*/
// z();


function z(){
    var b=900;
    function x(){
        var a=7;
        function y(){
            console.log(a,b);
        }
        a=100;
        y();
    }
    x();
}
var func = z();
// console.log(func);
// func();