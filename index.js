//learned hoisting and function execution behind the scene
console.log(c +" "+d)
var x=1;
a();
let c=10;
let d;
var b= ()=>{
 var b=200;
    console.log(x);
    console.log(b);
}
b();
console.log(x);
function a(){
    var x=10;
    console.log(x);

}
function b(){
    var x=100;
    console.log(x);
}
b();

//how scope chain work
function temp(){
    console.log(t);
    var t=9;
    temp1();
    function temp1(){
        console.log(t);
    }
}
temp();

