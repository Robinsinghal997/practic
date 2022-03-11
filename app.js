// const os = require('os')


// var num = os.cpus().length;

// console.log(num);
// var x = ()=>{
// console.log("test")
// }
// x;
// x()


// var x = 1;
// a();
// b();
// function a() {
//     var x = 10
//     console.log(x);
// }
// function b() {
//     var x = 100
//     console.log(x);
// }
// console.log(x);



// var x = 1;
// var test = a();
// b();
// function a() {
//     var x = 10;
// }
// function b() {
//     var x = 10;
// }
// console.log(x);
// demo()
// function demo(){
//     console.log("a func");
// }

// const a = () => {
//     console.log("d fun");}
// a()

var a =[]
var b = []
if(jsona==b){
    console.log("true");
}



var arr2 = "hello@world"
var a = arr2.split('')
var b = []
for (let index = a.length; index >= 0; index--) {
    b.push(a[index])
}
console.log(...b);



//This is a clouser function and it is work on it 


// deffination    clouser in action that is inner function can have the access to outer function variable as well as all the access gloable variable 

function Robin(params) {
    console.log("hello:",params);
    var a = 1
    var b = 2
    function demo() {
        console.log(`sum = ${a+b}`);
    }
    return demo
}
var a = Robin()
a()



// This example for lexical Scoping in javascript

// lexical scoping is a smiller but 

function Robin(params) {
    console.log("hello:",params);
    var a = 1
    var b = 2
    function demo() {
        console.log(a);
        console.log("b",b);
    }
    demo()
}
Robin()
