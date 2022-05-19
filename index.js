//1

function print() {
    console.log("My name is Nikhil");
}

print();

//2 

function sum(a, b) {
    console.log(a + b);
}
sum(3, 4);

//3

const mult = (a, b) => {
    console.log(a * b);
}
mult(3, 4);

//4 
// var x = 21;
// var girl = function () {
//     console.log(x);
//     var x = 20;
// };
// girl ();
console.log("undefined"); //  undefined

//5 
// var x = 21;
// girl ();
// console.log(x)
// function girl() {
//     console.log(x);
//     var x = 20;
// };

console.log("21"); // answer 21

//6

// var x = 21;
// a();
// b();
// console.log(a);
// a = function() {

//    x = 20;
//   console.log(x);
// };
// b = function() {

//     x = 40;
//    console.log(x);
// };

console.log("a not defined") // answer

//7

function fact(n) {
    let f = 1;
    for (let i = 1; i <= n; i++) {
        f = f * i;
    }
    console.log(f);
}
fact(5);