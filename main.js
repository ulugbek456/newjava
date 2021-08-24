// let oil = 7200, amount = 20;

// function count(num1, num2) {
 
//     return `Benzin narxi ${num1}. Manga ${num2} litr benzin kerak. jami ${num1*num2} bo'ladi`;

// }

// console.log(count(oil, amount));

// function myRandom(max,min) {
//     return Math.round(Math.random() * (max - min) + min);
// }
// console.log(myRandom(80,60));

// function myNumber(max,min) {
//     return Math.round(Math.random() * (max + min) - min);
// }

// let num1 = myNumber(80,20);
// let num2 = myNumber(80,20);
// let answer = +prompt(`${num1} + ${num2} = ?`)
// if(num1 + num2 == answer) {
//     console.log("To'g'ri");
// }else{
//     console.log("Notog'ri");
// }

function myRand(x,y) {
    return Math.round(Math.random() * (x - y) + y)
}
let x = +prompt("Maximal sonni kiriting");
let y = +prompt("Minimal sonni kiriting");
let num1 = myRand(x,y);
let num2 = myRand(x,y);
let answer = +prompt(`${num1} + ${num2} = ?`);
if (num1 + num2 == answer) {
    console.log("To'g'ri");
}else{
    console.log("Notog'ri");
}

let name = prompt("Ismingizni kiriting");
let year = +prompt("Joriy yilni kiriting");
let birth = +prompt("Tug'ilgan yilingizni kiriting");


function about(first,second,third) {
    return `Ism: ${first}. Hozir ${second} yil. Yoshi: ${second - third} da.`;
}

console.log(about(name,year,birth));

// function myRandom(max,min) {
//     return Math.round(Math.random() * (max-min) +min);
// }

// console.log(myRandom(80,60));

// function myNum(max,min) {
//     return Math.round(Math.random() * (max-min) + min);
// }

// let x = myNum(100,20);
// let y = myNum(100,20);
 
// console.log(myNum(100,20));

// prompt(`${x} + ${y} = ?`)