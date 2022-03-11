// var thisIsObject = {
//     a: 52,
//     b: function (param) {
//         return param;
//     }
// };
// var array = [3, 6, 2, 2, 56, 32, 5, 89, 32];
// var arr = []

// for (let index = 0; index < array.length; index++) {
//     if (arr.indexOf(array[index]) === -1) {
//         arr.push(array[index])
//     }
// }
// console.log(arr);

// var largest= 0;

// array.forEach((value)=>{
//     if(value%2==1){
//        largest = value
//     }
// })
// console.log(largest);

// for (i=0; i<=array.length;i++){
//     if (array[i]>largest) {
//         largest=array[i];
//     }
// }

// console.log(largest);

// var arr = [-1,1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(Math.min(...arr));

// const daa = arr.filter((el) => {
//     if (el > 5) {
//         return el
//     }
// })
// function hello() {
//     const a = 10
//     return a
// }
// console.log(a());

// function a() {
//     console.log("djhk");
//     return 10
// }

// console.log(daa);
// var arr = [1, 2, 3, 4, 5]
// var arrr = [4545, 534, 545]
// var daa = arrr.indexOf(12)
// console.log(daa);




// var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

// var petCounts = pets.reduce(function(obj, pet){
//     console.log(`===obj ${Object.values(obj)}  pet   ${pet}`);
//     if (!obj[pet]) {
//         obj[pet] = 1;
//     } else {
//         obj[pet]++;
//     }
//     return obj;
// }, {});

// console.log(petCounts); 

// var num = [1,2,3,4,5,7,9,8,3];
// const data = num.filter((item,index) => item%index == 0)
// console.log(data);


// program to check if a number is prime or not

// take input from the user
// const number = [1, 2, 5, 6, 9, 8];
// let isPrime = true;
// for (let index = 0; index < number.length; index++) {
//     // check if number is equal to 1
//     if (number[index] === 1) {
//         console.log("1 is neither prime nor composite number.");
//     } else {

//         // looping through 2 to number-1
//         for (let i = 2; i < number[index]; i++) {
//             if (number[index] % i == 0) {
//                 isPrime = false;
//                 break;
//             }
//         }

//         if (isPrime) {
//             console.log(`${number[index]} is a prime number`);
//         } else {
//             console.log(`${number[index]} is a not prime number`);
//         }
//     }
// }




var num = []
var alpha = []
let a= [5,6,7,'a','b','c']

 const data = a.filter((item)=>{
     if(typeof(item)=='number'){
         num.push(item)
     }else{
         alpha.push(item)
     }
 })
for (let index = 0; index < a.length; index++) {
    if (typeof(a[index]) == "number") {
        num.push(a[index])
    }else{
        alpha.push(a[index])
    }
}
console.log("num",num);
console.log("aplha",alpha);