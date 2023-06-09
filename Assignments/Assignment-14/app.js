/* 1. Write a function that displays current date & time in your browser.*/
// function DateAndTime(){
//     var currentDate = new Date();
//     var dateString = currentDate.toString();
//     document.getElementById('currentDateAndTime').innerHTML=
//     currentDate.toString()
// }
/* <!-----***********-------->*/


/* 2. Write a function that takes first & last name and then it greets the user using his full name.*/
// function WelcomeTheUser(firstName,lastName){
//  var firstName = (prompt("Enter a First Name "))
// var lastName = (prompt("  Enter a Last Name"))
// var fullName = firstName + " " + lastName
// alert("Congratulation! " + fullName)
// }
/* <!-----***********-------->*/



/* 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.*/

// function TwoNumbers(num1 , num2){
//     var num1 = (prompt("Enter a first number"))
//     var num2 = (prompt("Enter a second number"))
//     var add = num1 + num2
//     document.getElementById('addNumbers').innerHTML
//     return num1,num2;
// }
/* <!-----***********-------->*/

/*4. Calculator:
Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and 
show the desired result in your browse*/
// function calculate(num1, num2, operator){
//     var result;
//     switch (operator) {
//         case '+':
//           result = num1 + num2;
//           break;
//         case '-':
//           result = num1 - num2;
//           break;
//         case '*':
//           result = num1 * num2;
//           break;
//         case '/':
//           result = num1 / num2;
//           break;
//         default:
//            result = 'Invalid operator';
// }
//    return result;
// }
// function calculateAndDisplay(){
//   var num1 = parseFloat(document.getElementById("num1").value)
//   var num2 = parseFloat(document.getElementById("num2").value)
//   var operator = document.getElementById("operator").value;
//   var result= calculate(num1,num2,operator)
//   document.getElementById("result").innerHTML = "Result is " + result;
// }
/* <!-----***********-------->*/


/* 5. Write a function that squares its argument.*/
// function square(number){
//     return number * number;
// }
// var result = square(8)
// console.log(result)
// document.write("Square of a number is ",result)
/* <!-----***********-------->*/


/* 6. Write a function that computes factorial of a number.*/
// function factorial(number){
//   if (number == 0 || number == 1) {
//     return 1;
//   } 
//   else {
//   return number * factorial(number -1)
// }
// }
// var result = factorial(7)
// console.log(result)
// document.write("Factorial of a number is " , result)
/*<!-----***********-------->*/



/* 7. Write a function that take start and end number as inputs & display counting in your browser*/
// function countNumbers(start, end) {
//   var output = '';
//   for (var i = start; i <= end; i++) {
//     output += i + ' ';
//   }
//   document.getElementById('countingResult').innerHTML = output;
// }
/* <!-----***********-------->*/


/* 8. Write a nested function that computes hypotenuse of a right angle triangle.
Hypotenuse2 = Base2 + Perpendicular2 
Take base and perpendicular as inputs.
 Outer function : calculateHypotenuse()
 Inner function: calculateSquare() */
//  function calculateHypotenuse(base, perpendicular) {
//   function calculateSquare(number) {
//     return number ** 2;
//   }
//   var baseSquared = calculateSquare(base);
//   var perpendicularSquared = calculateSquare(perpendicular);
//   var hypotenuseSquared = baseSquared + perpendicularSquared;
//   var hypotenuse = Math.sqrt(hypotenuseSquared);
//   return hypotenuse;
// }
// var baseLength = 3;
// var perpendicularLength = 4;
// var hypotenuse = calculateHypotenuse(baseLength, perpendicularLength);
// console.log("The hypotenuse is: " + hypotenuse);
// document.write("The hypotenuse is: " + hypotenuse);
/* <!-----***********-------->*/



/* 9. Write a function that calculates the area of a rectangle.
 A = width * height
 Pass width and height in following manner:
i. Arguments as value
ii. Arguments as variables */
// function areaOfRectangle(width,height){
//   var area = width * height
//   return area;
// }
// var width = 4
// var height = 9
// var area = width * height
// document.write("Area of a rectangle is ",area)
/* <!-----***********-------->*/



/* 10. Write a JavaScript function that checks whether a passed 
 string is palindrome or not?
 A palindrome is word, phrase, or sequence that reads the same backward as 
 forward, e.g., madam.*/
//  var userInput = (prompt("Enter a password please"))
//  function password(palindrome){
//   var password = palindrome
//   if(password == "a-z" || "A-Z" || "0-9"){
//     document.write("The password is correct")
//   }
//   else{
//     document.write("The password is incorrect")
//   }
//   return password
//  }
//  var inputString = userInput;
//  var palindromeResult = password(inputString)
// console.log(palindromeResult)
/* <!-----***********-------->*/
 


/* 11. Write a JavaScript function that accepts a string as a 
parameter and converts the first letter of each word of the 
string in upper case. 
EXAMPLE STRING : 'the quick brown fox'
EXPECTED OUTPUT : 'The Quick Brown Fox'*/
// function upperCase(str){
//   var words = str.split(" ")
//   var capitalizedWords = []
//   for(i= 0;i < words.length; i++){
//     var word = words[i];
//     var capitalized = word.charAt(0).toUpperCase() + word.slice(1)
//     capitalizedWords.push(capitalized);
//   }
//   var changeString = capitalizedWords.join(" ");
//   return changeString
// }
// var inputString = 'the quick brown fox';
// var result = upperCase(inputString);
// console.log(result);
// document.write("STRING : ",inputString, "</br>")
// document.write("OUTPUT : ",result)
/*<!-----***********-------->*/



/* 12. Write a JavaScript function that accepts a string as a 
parameter and find the longest word within the string. 
EXAMPLE STRING : 'Web Development Tutorial'
EXPECTED OUTPUT : 'Development'*/
// function findLongestWord(str) {
//   var words = str.split(" "); 
//   var longestWord = ""; 
//   for (var i = 0; i < words.length; i++) {
//     var word = words[i];
 
//   if (word.length > longestWord.length) {
//       longestWord = word;
//     }
// }

//   return longestWord;
// }
// var exampleString = 'Web Development Tutorial';
// var result = findLongestWord(exampleString);
// console.log(result);
// document.write("EXAMPLE STRING : ",exampleString,"</br>")
// document.write("EXPECTED OUTPUT : ",result)
/*<!-----***********-------->*/


/*13. Write a JavaScript function that accepts two arguments, a 
string and a letter and the function will count the number of 
occurrences of the specified letter within the string. 
Sample arguments : 'JSResourceS.com', 'o'*/
// function FindingSpecificLetter(str,letter){
//   var count = 0;
//   for (var i = 0; i < str.length; i++) {
//         if(str.charAt(i) === letter){
//           count ++;
//         }
// }
//    return count;
// }
// var inputString = 'JSResourceS.com'
// var specificLetter = "o"
// var result = FindingSpecificLetter(inputString,specificLetter);
// console.log(result)
// document.write("Sample arguments : ",inputString,"</br>")
// document.write("Occurrences of letter 'O' is ",result)
/*<!-----***********-------->*/

/* 14. The Geometrizer
Create 2 functions that calculate properties of a circle, using  the definitions here.
Create a function called calcCircumference:
• Pass the radius to the function.
• Calculate the circumference based on the radius, and output 
"The circumference is NN".
Create a function called calcArea:
• Pass the radius to the function.
• Calculate the area based on the radius, and output "The area 
is NN".*/
// function calcCircumference(radius){
//   var circumference = 2 * Math.PI * radius;
//   console.log("The circumference is "+ circumference)
//   document.write("The circumference is "+ circumference,"</br>")
// }
// var radius = 10;
// calcCircumference(radius)

// function calcArea(radius){
//   var area =  Math.PI * radius * radius;
//   console.log("The area is " + area)
//   document.write("The area is " + area)
// }
// var radius = 15;
// calcArea(radius)
/*<!-----***********-------->*/














