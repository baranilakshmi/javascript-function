// camelcaseword
// pascalcase
// kebab-case
// snake_case

function greet() {

    console.log("hi,iam barani");

}
greet();

function greetwithname(name) {

    console.log('hello' + " " + name);
}

greetwithname("kalai");

function greetwithname(name) {


    console.log(`hello ${name}`);
}

greetwithname("meghasri");

function add(p,q) {

    console.log(p+q);
}
add(13,15);


   // var a = parseInt("14.8");
  //  var b = parseInt("27.6");
  //  console.log(a+b);



//let a = parseInt(prompt("a:"));
//let b = parseInt(prompt("b:"));

//add(a,b);

function add(a,b) {

    console.log(a+b);
}

function threetimes(number) {

    return 3*number;
}

result = threetimes(5);

console.log(result);

//global scope

let a = "maths";

function greeting() {

let b = "is essential";
console.log(a);
console.log(a+ " " +b);

if (true) {

let c = "in daytoday life";
console.log(c);
console.log(a+ " " +b + " " +c);

}

//connsole.log(c);

}
greeting()

console.log(a);
//console.log(b);
//console.log(c);


//hoisting
var e= "himalaya";
console.log(e);

f= "tamilnadu";
console.log(f);
var f

let g 
console.log(g);

//console.log(h);
h = "hi";

//except for while loop we can increase numbers continously by fuction
//recursive function

function countdown(number) {

console.log(number);

number = number - 5;

if (number > 0) {
    countdown(number)
}

}

countdown(20);