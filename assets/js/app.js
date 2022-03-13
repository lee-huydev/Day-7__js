// ! JS Variable
//ex1
var carName = 'Volvo';
//ex2
var x2 = 50;
//ex3
var x3 = 5;
var y3 = 10;
document.getElementById('demo').innerHTML = x3 + y3;
//ex4
var x4 = 5;
var y4 = 10;
var z4 = x4 + y4;
alert(z4);
//ex5
var firstName5 = 'John',
   lastName5 = 'Doe',
   age = 35;
//! JS Operator
//ex6
let x6 = 10;
let y6 = 5;
alert(x6 * y6);
//ex7
let x7 = 10;
let y7 = 2;
alert(x7 / y7);
//ex8
let x8 = 15;
let y8 = 9;
alert(x8 % y8);
//ex9
let x9 = 10;
let y9 = 5;
x9 += y9;
alert(x9);
//ex10
let x10 = 10;
let y10 = 5;
x10 *= y10;
alert(x10);
//! Data Types
let length = 16; // Number

let lastName = 'Johnson'; // String

const x = {
   firstName: 'John',
   lastName: 'Doe',
}; // Object

//! JS String Methods
//ex11
let txt = 'Hello World';
txt = txt.toUpperCase();
alert(txt);
//ex12
let str1 = 'I can eat bananas all day';
let str2 = str1.slice(10, 17);
//ex13
let str3 = 'Hello World';
str3 = str3.replace('Hello', 'Welcome');
//ex14
let str4 = 'Hello World';
str4 = str4.toUpperCase();
//ex15
let str5 = 'Hello World';
str5 = str5.toLowerCase();
//! Image Zalo
let a = prompt('First number', 1);
a = parseInt(a);
let b = prompt('Second number', 2);
b = parseInt(b);
alert(a + b);
