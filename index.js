var a = ['A', 'B', 'A', 'C', 'B'];
var ga = []

// console.log(a);
// a.includes()

// console.log(array1.includes());
// expected output: true

// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));
// expected output: true


a.forEach((c) => {
    console.log(!ga.includes(c));
    if (!ga.includes(c)) {
        ga.push(c)
    }
})
console.log(ga);



// var unique = a.filter((c, index) => {

//     console.log("c:", c, "index", index, "======", a.indexOf(c));
//     console.log(a.indexOf(c) === index);
//     return a.indexOf(c) === index;
// })
// console.log(unique);



// for (let index = 0; index < a.length; index++) {
//     if (b.indexOf(a[index]) === -1){
//         b.push(a[index])
//     }
// }
// console.log(b);






// const data = a.filter((c ,index)=>{a.indexOf===index})
// console.log(data);





// how to merage in array

// var d = a.concat(b)

// let uniqueChars = d.filter((c, index) => {
//     return d.indexOf(c) === index;
// });

// console.log(uniqueChars);

// console.log("Answer:",d);
