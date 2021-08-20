// b() function is sittling lexically inside a() function
function a(){
    function b(){
        function c(){
            console.log(b); // 10
        }
    }
}
var b=10;
a();
