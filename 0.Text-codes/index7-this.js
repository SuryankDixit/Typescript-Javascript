// Thois uses runtime binding. 

console.log(this);
function checkThis(){
    console.log(this);
}

let obj = {
    a:10,
    b:checkThis
}

console.log(obj.b());   // points to the object;
let x = obj.b;
x();    // points to global object window;
