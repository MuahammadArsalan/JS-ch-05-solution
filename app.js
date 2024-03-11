3

// Question No 1 :
// 1. Write a program that take two numbers & add them in a 
// new variable. Show the result in your browser.

// SOLUTION :


var inp1 = document.querySelector(".input1");
var inp2 = document.querySelector(".input2");
var paragraph = document.querySelector(".para");
var tickets = document.querySelector(".ticket");
var table = document.querySelector(".table-div");
var quantiy1 = document.querySelector(".qty1");
var quantiy2 = document.querySelector(".qty2");
var chemistryMarks = document.querySelector(".chem");
var mathMarks = document.querySelector(".math");
var physicsMarks = document.querySelector(".phy");
var urduMarks = document.querySelector(".urdu");
var age = document.querySelector(".b-y");
var snacks = document.querySelector(".snacks");
var snacks = document.querySelector(".snacks");
var yourAge = document.querySelector(".age");

// function add(){
//     console.log(inp1.value);
//     console.log(inp2.value);
//     var sum = +inp1.value + +inp2.value
//     console.log(sum);
//     paragraph.innerHTML = "The sum of the two number's is ====> " +sum

// }


// Question No 2

// 2. Repeat task1 for subtraction, multiplication, division & modulus

// SOLUTION


// function subtract(){
//     console.log(inp1.value);
//     console.log(inp2.value);
//     var sub = +inp1.value  -  +inp2.value
//     console.log(sub);
//     paragraph.innerHTML = "The subtraction of the two number's is ====> " + sub

// }


// function multiplication(){
//     console.log(inp1.value);
//     console.log(inp2.value);
//     var multiply = +inp1.value   *   +inp2.value
//     console.log(multiply);
//     paragraph.innerHTML = "The multplication of the two number's is ====> " + multiply

// }
// function division(){
//     console.log(inp1.value);
//     console.log(inp2.value);
//     var divide = +inp1.value   /   +inp2.value
//     console.log(divide);
//     paragraph.innerHTML = "The division of the two number's is ====> " + divide

// }
// function modulus(){
//     console.log(inp1.value);
//     console.log(inp2.value);
//     var mod = +inp1.value   %   +inp2.value
//     console.log(mod);
//     paragraph.innerHTML = "The modulus of the two number's is ====> " + mod

// }




// Question No 4

// 4. Cost of one movie ticket is 600 PKR. Write a script to 
// store
// ticket price in a variable & calculate the cost of buying 5 
// tickets
// to a movie. Example output:

// SOLUTION :

// function ticket(){

// console.log(tickets.value)
//         let ticketPrice = 600;
//     let totalCost = +tickets.value * +ticketPrice

// console.log ("The total cost of your required tickets is ", totalCost)
// paragraph.innerHTML =("The total cost to buy "+ tickets.value+ " tickets to a movie is " + totalCost + " PKR .")
// tickets.value= ""
// }



// Question No 5 :

// 5. Write a script to display multiplication table of any 
// number in your browser. E.g.

// SOLUTION :

// function table5() {
// if( table.innerHTML ===   ` 5 * 1 = 5 <br><br>
// 5 * 2 = 10 <br><br>
// 5 * 3 = 15 <br><br>
// 5 * 4 = 20 <br><br>
// 5 * 5 = 25 <br><br>
// 5 * 6 = 30 <br><br>
// 5 * 7 = 35 <br><br>
// 5 * 8 = 40 <br><br>
// 5 * 9 = 45 <br><br>
// 5 * 10 = 50 <br><br>`  )
// {

//     table.innerHTML = "";

// }else{

//     table.innerHTML = ` 5 * 1 = 5 <br><br>
//     5 * 2 = 10 <br><br>
//     5 * 3 = 15 <br><br>
//     5 * 4 = 20 <br><br>
//     5 * 5 = 25 <br><br>
//     5 * 6 = 30 <br><br>
//     5 * 7 = 35 <br><br>
//     5 * 8 = 40 <br><br>
//     5 * 9 = 45 <br><br>
//     5 * 10 = 50 <br><br>`
// }
// }


// Question No 7 :

// 7. Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// SOLUTION :

// function cart(){
//         let item1 = 650 ;
//         let item2 = 100 ;
//         let Shipping = "Shipping charges is "+ 100+" Rs"
// // console.log(+quantiy1.value, +quantiy2.value);
// // console.log(+quantiy1.value * +item1  +  +quantiy2.value * item2 + 100);

//     let totalOrderCost =(+quantiy1.value * +item1  +  +quantiy2.value * item2 + 100);


//     paragraph.innerHTML = `<h1> Shopping Cart </h1>   <h3>  Price of item 1 is ${item1} <br>  Quantity of item 1 is ${quantiy1.value}
//     <br> Price of item 2 is ${item2} <br>  Quantity of item 2 is ${quantiy2.value} <br>${Shipping} <br>
//     <br> The total cost of your order is  ${totalOrderCost} </h3> `

// }

// Question No 8 :

// 8. Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser.

// SOLUTION :

// function result(){
//     let totalMarks = 400;
//     let obtainedMarks = +chemistryMarks.value + +mathMarks.value + +physicsMarks.value + +urduMarks.value 
//     let percentage = obtainedMarks / totalMarks * 100
// paragraph.innerHTML = ` <h3> Total Marks = ${totalMarks} <br> Obtained Marks = ${obtainedMarks}  <br> Percentage =  ${percentage} % </h3>` 
// }

// Question No 9 :

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)

// SOLUTION :

// function convert(){
//     let dollar = 10 * 104.48  ;
//     let riyals = 25 * 28;
//     let add = dollar + riyals;
//     return paragraph.innerHTML =`<h1> Currency in PKR </h1> <br> Total currency in PKR is : ${add}`
//     // console.log(dollar ,riyals);

// }
// var conFunc = convert() 



// Question No 10 :

//  10.Write a program to initialize a variable with some 
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// SOLUTION :

// let num1 = 10;
// num1 = num1 + 5 * 10 / 2 
// console.log(num1);


// Question No 11 :
// 1. The Age Calculator: Forgot how old someone is? 
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored 
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.

// SOLUTION :


// function getAge(){
//     let currentYear = 2024;
//     let birthYear = age.value;
//   let year = currentYear - birthYear
//   console.log(year);
//   age.value =""
// paragraph .innerHTML = `<h1>Age Claculator</h1> <br> <b> Current Year : ${currentYear} <br> Birth Year : ${birthYear} <br> Your Age is ${year} </b>`


// }

// Question No 11 :

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.

// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)

// SOLUTION :

// function radiusCalc(){
//     let raduis = 20;
//     let circumfarence = 2 * 3.14 * raduis;
//     let area = 2 * 3.14 * raduis * raduis 
//     console.log(circumfarence , area);
//     paragraph.innerHTML =`<h1>The Geometrizer</h1> <br> Radius of circle ${raduis} <br><br>The Circumfarence is ${circumfarence}<br><br> The Area is ${area} `

// }
//  let clacFunc =radiusCalc()

// QUESTION NO 13:

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”.

// SOLUTION :

// function limitSnackEat() {
//     let favorite = snacks.value
//     console.log(snacks.value)
//     let currentYear = 2024;
//     let age = yourAge.value;
//     console.log(yourAge.value)
//     let maxAge = 65;
//     let snackPcsPerDay = +3 * +65 * +365 - +yourAge.value  * +365 
// console.log(snackPcsPerDay);


//     paragraph.innerHTML = `Favourite Snacks : ${snacks.value} <br><br> Your age is ${yourAge.value} <br><br> Estimated Maximum age is : ${maxAge}<br> <br>Snack amount per day : ${snackPcsPerDay} <br><br> You will need ${snackPcsPerDay} ${snacks.value} to last you until the ripe old age of ${maxAge}  `
// }








