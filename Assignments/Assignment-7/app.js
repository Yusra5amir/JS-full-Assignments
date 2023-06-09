/*1. Write a program to take “city” name as input from user. If 
user enters “Karachi”, welcome the user like this: “Welcome to city of lights”*/
// var city = (prompt("City"))
// if (city == 'karachi' || city == 'Karachi') {
//     alert("Welcome to city of lights")
//     console.log("Welcome to city of lights")
// }
// else{
//     alert("Not Allowed");
//     console.log("Not Allowed");
// }
/* <!--------*************-------->*/

/*2. Write a program to take “gender” as input from user. If the user is male,give the message : Good Morning Sir.
 If the user is female, give the message: Good Morning Ma’am.*/
// var gender = (prompt("Your Gender Please"));
// if (gender == "male" || gender == "Male"){
//     console.log("Good Morning Sir")
//     alert("Good Morning Sir")
// }
// if(gender == "female" || gender == "Female"){
//     console.log("Good Morning Ma’am")
//     alert("Good Morning Ma’am")
// }
/* <!--------*************-------->*/


/* 3. Write a program to take input color of road traffic signal from the user & show the message according to this table:*/
// var color = (prompt("Enter a color of road traffic signal"))
// if(color == "red"){
//     console.log("Must Stop")
//     alert("Must Stop")
// }
// if(color == "yellow"){
//     console.log("Ready to move")
//     alert("Ready to move")
// }
// if(color == "green"){
//     console.log("Move now")
//     alert("Move now")
// }
/* <!--------*************-------->*/


/*4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, 
show the message “Please refill the fuel in your car”*/
// var currentFuel = (prompt("What is a remaining fuel in car"));
// if(currentFuel < "0.25 Litres"){
//     alert("Please refill the fuel in your car")
//     console.log("Please refill the fuel in your car")
// }
// else if(currentFuel >= "0.25Litres"){
//     alert("Fuel is remain in your car")
//     console.log("Fuel is remain in your car")
// }
/* <!--------*************-------->*/



/*5. Run this script, & check whether alert message would be
displayed or not. Record the outputs.
a.*/
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
/*b*/ 
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
/* c.*/
//  var c = 12;
// if (++c === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (c++ < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
/* d.*/ 
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
/* e.*/ 
// if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
/*f.*/
//  if("car" < "cat"){
//     alert("car is smaller than cat");
// }
/* <!--------*************-------->*/


/*6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting
percentage on your page. Take percentage & compute  grade as per following table:*/
// var urdunum = +prompt("Enter Your Urdu Marks")
// var islnum = +prompt("Enter Your Islamiat Marks")
// var mathsnum = +prompt("Enter Your Maths Marks")
// var result = urdunum + islnum + mathsnum
// var percent = (result / 300) * 100
// console.log(percent)
// document.write("Total marks : 300","<br\>")
// document.write("Marks obtained :",result,"<br\>")
// document.write("Percentage : ",percent,"%","<br\>")
// if (percent >= 80) {
//     console.log("Grade : A-one","<br\>")
//     document.write("Grade : A-one","<br\>")
//     document.write("Excellent","<br\>")
// }
// else if(percent >= 70) {
//     document.write("Grade : A","</br>")
//     document.write("Good")
// }
// else if(percent >= 60) {
//     document.write("Grade : B","<br\>")
//     document.write("You need to improve","<br\>")
// }

// else if(percent < 60){
//     document.write("Grade : Fail","<br\>")
//     document.write("Sorry, Better Luck for Next Time","<br\>")
// }
/* <!--------*************-------->*/


/*7. Guess game:
Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number.
a. If user guesses the same number, show “Bingo! Correct answer”.
b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.*/
// var secretNumber = 9;
// var secretNumber = (prompt("Enter the secretNumber"));
// if (secretNumber == 9){
//     console.log("Bingo! Correct answer")
//        alert ("Bingo! Correct answer");
// }
// else if(secretNumber == 10) {
//     console.log("False")
//     alert("Close enough to the correct answer")
  
// }
// else if(secretNumber < 9 ) {
//     console.log("False")
//     alert("Sorry you are wrong")
// }
/* <!--------*************-------->*/



// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number 
// // is divisible by 3.
// var divNum = "num%3"
// num = 3>30;

// var num = (prompt("Enter the number which divisible by 3"))
// if(num % 3 == 0){
//     console.log("Divisible by 3");
//     alert("Divisible by 3");
// }
// else{
//     console.log("Not Divisible by 3");
//     alert("Not Divisible by 3");
// }
/* <!--------*************-------->*/


/* 9. Write a program that checks whether the given input is an even number or an odd number.*/
// var num = (prompt("Enter a number"))
// var number = num % 2
// if(number == 0){
//     console.log(`${num}  is an even number`)
//     alert(`${num}  is an even number`)
// }
// else{
//     console.log(`${num}  is an odd number`)
//     alert(`${num}  is an odd number`)
// }
/* <!--------*************-------->*/



/* 10. Write a program that takes temperature as input and 
shows a message based on following criteria
a. T > 40 then “It is too hot outside.”
b. T > 30 then “The Weather today is Normal.”
c. T > 20 then “Today’s Weather is cool.”
d. T > 10 then “OMG! Today’s weather is so Cool.”*/
// var temp = (prompt("Enter a temperature"))
// if(temp > 40){
//     console.log("")
//     alert("It is too hot outside.")
// }

// else if(temp > 30){
//     console.log("The Weather today is Normal.")
//     alert("The Weather today is Normal.")
// }

// else if(temp > 20){
//     console.log("Today’s Weather is cool.")
//     alert("Today’s Weather is cool.")
// }

// else if(temp > 10){
//     console.log("“OMG! Today’s weather is so Cool.")
//     alert("OMG! Today’s weather is so Cool.")
// }
/* <!--------*************-------->*/


/* 11. Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
a. First number
b. Second number
c. Operation (+, -, *, /, %)
Compute & show the calculated result to user.*/




    