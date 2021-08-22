function outer(arg1){
    let var1=10;
    let x=10;

    function inner(arg2){
        let x=10;
        let var2=20;
        console.log(arg1,arg2,var1,var2,x);
        // console.log(arguments);
    }
    inner("Param from Outer");
    return inner;
}

let x = outer("param1");
x("param2");