// function x(){
//     var i=1;
//     setTimeout(function(){
//         console.log(i);
//     },1000);
//     console.log("Namaste"); // js will print this and then it will wait for 1 second. 
// }
// x();
/*
the function inside setTimeout is a closure.
it remebers the refernce to i along with it.
setTimeout function takes the function , stores it somewhere and attaches the timer with it.
Once the timer expires , it pushes the function in stack and executes and pop it from stack.
*/  

function y(){
    for(var i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
} 
y(); //6 6 6 6 6 

function x(){
    for(let i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
}
x(); // 1 2 3 4 5