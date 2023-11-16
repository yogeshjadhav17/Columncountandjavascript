alert("Hello World. Welcome to my website");

/* function in javascript example */

function FullStackClass() {
    const ClassName= "Hubsem Private Limited";
    const City="chennai";
    const MyName= "Yogesh";
    const message="Hello, My Name is" +MyName+ "and I am doing my course of website development with" +ClassName+ "which is situated in " +City;
    console.log(message);
    document.write(message);
}

FullStackClass();

console.log(FullStackClass);

/* Array In javascript*/

document.write("<br>");
let Apartment = ["Sargam", "Viraj", "Preeti", "Sawali", "Swami"];

document.write(Apartment[0]);
document.write("<br>");

document.write(Apartment);
document.write("<br>");

console.log(Apartment[3]);
document.write("<br>");

console.log(Apartment[4]);
document.write("<br>");


/*Destructuring array */

let numbers=  [0,1,2,3,4,5,6,7,8,9];
document.write("<br>");


let [zero,one,two,...end]= numbers;

console.log(numbers);
console.log(0);
document.write(zero);
document.write("<br>");

document.write(one);
console.log(one);
document.write("<br>");

console.log(two);
document.write(two);
document.write("<br>");

document.write(end);
console.log(end);

/* Increment and Decrement operator */
let z=10;
console.log(z**2);

let x=10;
console.log(++x);

let f=20;
console.log(--f);

/* Comparison Operator */
let g=10;
console.log(g==20);

let d=10;
console.log(d!==20);

let e=20;
console.log(e>30);

let j=10;
console.log(j<13);

let s=10;
console.log(s);

/* If statement */

let hour=00;
let greeting;
if(hour < 18){

    greeting= "Good day";
}
else
{
    greeting="Have a good night";
}

console.log(greeting);
document.write(greeting);

/* If statement using DOM elements in javascript */


if (hour < 18){
    document.getElementById("demo").innerHTML="Good Day!";
    
}

console.log(demo);
document.write(demo);

/* If ...Else statement for displaying true or false condition */
let hour1=00;
let greeting1;
if (hour1 < 18 ){
    greeting1="Good Day";
}
else{
    greeting1="Good evening";
}
console.log(greeting1);
document.write(greeting1);

/* If .....elseif statement for more than two statement or condition if both conditions are false.  */
let time;

if(time<10)
{
    greeting="Good morning";
}
else if(time > 10){
    greeting="Good day";
}

else if(time > 18)
{
    greeting="Good evening";
}

console.log(greeting);

/* This Keyword-  It is a special keyword that refers to the object executing a function or method*/

let human= {
    firstName:"Yogesh",
    lastName:"Jadhav",
    fullName: function(){
 return this.firstName + "" + this.lastName;
},
};


console.log(human.fullName());
document.write(human.fullName());





