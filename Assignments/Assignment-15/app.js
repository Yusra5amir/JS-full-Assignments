/* 1. Write a custom function power ( a, b ), to calculate the value of a raised to b.*/
// function power(a,b){
//     var result = 1;
//     switch(true) {
//         case b == 0:
//         break;
//         case b > 0:
//         var count = 0;
//         while (count < b) {
//         result *= a;
//         count++;
//     }
//     break;
//         case b < 0:
//         var negativeCount = 0;
//         do {
//         result /= a;
//         } while (negativeCount < -b);
//     break;
// }
// return result;
// }
// var a = 3;
// var b = 3;
// var result = power(a, b);
// console.log(result); 
// document.write("The value of a raised to b is " ,result)
/*--------*************--------*/


 
/* 2. Any year is entered through the keyboard. Write a function to 
 determine whether the year is a leap year or not.*/
// var year = (prompt("Enter any year"))
// var leap = leapYear(year)
// function leapYear(year){
// if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
//     return "This year is leap year";
// }
// else{
//     return "This year is not leap year";
// }
// }
// console.log(leap);
// document.write(leap)
/*--------*************--------*/



/*3. If the lengths of the sides of a triangle are denoted by a, b, and c, then area of triangle is given by
area = S(S − a)(S − b)(S − c)
where, S = ( a + b + c ) / 2
Calculate area of triangle using 2 functions*/
// function calculateArea(a, b ,c){
//     var s = (a + b + c) / 2;
//      var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
//     return area;
// }

// var a = 3;
// var b = 4;
// var c = 5;
// var triangleArea = calculateArea(a , b ,c);
// console.log("The area of the triangle is : ",triangleArea);
// document.write("The area of the triangle is : ",triangleArea,"</br>");

// function area(a, b , c){
//     var s = (a + b + c) / 2;
//      var area = Math.sqrt((s - a) * (s - b) * (s - c));
//      return area;
// }

// var a = 4;
// var b = 4;
// var c = 4;
// var triangleArea = area(a , b ,c);
// console.log("The area of the triangle is : ",triangleArea);
// document.write("The area of the triangle is : ",triangleArea);
/*--------*************--------*/



/* 4. Write a function that receives marks received by a student in 3 subjects and returns the average and percentage of these
marks. there should be 3 functions one is the mainFunction and other are for average and percentage. Call those functions 
from mainFunction and display result in mainFunction*/
// function calculateAverage(marks){
//    var sum = 0
//    for(i = 0;i < marks.length; i ++){
//    sum += marks[i];
//    }
//    var average = sum/marks.length;
//    return average
// }
// function calculatePercentage(marks){
//     var totalMarks = marks.length * 100;
//     var sum = 0
//     for(i=0 ; i< marks.length ; i++){
//     sum += marks[i];}
//     var percentage= (sum / totalMarks * 100)
//     return percentage;
// }
// function mainFunction(math,urdu,eng){
//     var marks = [82, 75 , 69];
//     var average = calculateAverage(marks)
//     var percentage = calculatePercentage(marks)

//     console.log("Average marks are : ",average)
//     document.write("Average marks are : ",average,"</br>")

//     console.log("Percentage is : ",percentage , "%")
//     document.write("Percentage is : ",percentage , "%")
// }
// mainFunction()
/*--------*************--------*/



/* 5. You have learned the function indexOf. Code your own custom function that will perform the same functionality. You can code 
for single character as of now.*/
// function customIndexOf(string, char) {
//     for (let i = 0; i < string.length; i++) {
//       if (string[i] === char) {
//         return i;
//       }
//     } 
//         return -1; 
// }
//   var string = "Hello World!";
//   var char = (prompt("Enter any Character")) 
//   var index = customIndexOf(string, char);
//   console.log(index);
//   document.write("String : ",string,"</br>")
//   document.write("Index of string is : ",index);
/*--------*************--------*/



/* 6. Write a function to delete all vowels from a sentence. Assume 
that the sentence is not more than 25 characters long.*/
// // function vowels(sentences){
// //     var result = ""
// //     var vowels = "a,e,i,o,u,A,I,O,E,U"
// //     for(i = 0; i< sentence.length; i++){
// //     if(!vowels.includes(sentence[i])){
// //        result +=sentence[i];
// //     }
// // }
// // return result;
// // }
// // var sentence = "I don't wash the dishes"
// // var result = vowels(sentence);
// // document.write("With vowels : ",sentence,"</br>")
// // document.write("WIthout bvowels : ",result,)
// /*--------*************--------*/



/* 7. Write a function with switch statement to count the number of 
 occurrences of any two vowels in succession in a line of text. For example, in the sentence*/
// function countVowels(text){
//     var count = 0;
//     var vowels = "a,e,i,o,u,A,I,O,E,U"

//     for(var i=0;i< text.length -1; i++){
//         var currentChar = text[i];
//         var nextChar = text[i + 1];
//     switch(currentChar.toLowerCase()){
//         case 'a':
//         if(nextChar.toLowerCase() == 'e' || nextChar.toLowerCase() == 'a'){
//             count++;
//         }
//         break;
//         case 'e':
//             if(nextChar.toLowerCase() == 'a'){
//                 count++;
//             } 
//             break;
//         case 'i':
//             if(nextChar.toLowerCase() == 'u'){
//                 count++;
//             } 
//             break;
//             default:
//             break;
//         }
//     }
//     return count;
// }
// var sentence = "Pleases read this application and give me gratuity"
// var result = countVowels(sentence);
// console.log(result);
// document.write(sentence,"</br>")
// document.write("Occurrences of any two vowels in succession in a line of text ", result)
/*--------*************--------*/

  

/* 8. The distance between two cities (in km.) is input through the keyboard.
 Write four functions to convert and print this distance in meters, feet, inches and centimeters.*/
//  function convertIntoMeters(distance) {
//     return distance * 1000;
//   }
//   function convertIntoFeet(distance) {
//     return distance * 3280.84;
//   }
//   function convertIntoInches(distance) {
//     return distance * 39370.1;
//   }
//   function convertIntoCentimeters(distance) {
//     return distance * 100000;
//   }
//  var distanceInKm = parseFloat(prompt("Enter the distance between two cities in kilometers:"));

//  var distanceInMeters = convertIntoMeters(distanceInKm);
//  console.log("Distance in meters:", distanceInMeters);
//  document.write("Distance in meters:", distanceInMeters ," m","</br>");
 
//  var distanceInFeet = convertIntoFeet(distanceInKm);
//  console.log("Distance in feet:", distanceInFeet);
//  document.write("Distance in feet:", distanceInFeet ," feet","</br>");

//  var distanceInInches = convertIntoInches(distanceInKm);
//  console.log("Distance in inches:", distanceInInches);
//  document.write("Distance in inches:", distanceInInches ," inches","</br>");

//  var distanceInCentimeters = convertIntoCentimeters(distanceInKm);
//  console.log("Distance in centimeters:", distanceInCentimeters);
//  document.write("Distance in centimeters:", distanceInCentimeters," cm","</br>");
/*--------*************--------*/



/* 9. Write a program to calculate overtime pay of employees. 
Overtime is paid at the rate of Rs. 12.00 per hour for every hour 
worked above 40 hours. Assume that employees do not work for fractional part of an hour.*/
// function employeesPay(hoursWorked){
//  var overtimeRate = 12.0;
// var overtimePay = 0
//  if(hoursWorked ){
//     var overtimeHours = hoursWorked 
//     var overtimePay = overtimeHours * overtimeRate
//  }
//  return overtimePay;
// }
// var hoursWorked = (prompt("Enter the number of overtime hours worked:"))
// var overtimePay = employeesPay(hoursWorked)
// var regularHours = 40 *12
// var totalHoursPay = overtimePay + regularHours
// console.log("Overtime pay: Rs:", overtimePay.toFixed());
// document.write("Overtime pay is Rs: ", overtimePay,"</br>")
// document.write("Total pay (overtimepay + regularhours) is Rs: ",totalHoursPay)
/*--------*************--------*/



/*10. A cashier has currency notes of denominations 10, 50 and 100. If the amount to be withdrawn is input through the 
keyboard in hundreds, find the total number of currency notes of each denomination the cashier will 
have to give to the withdrawer.*/
// function currencyNotes(amount){
//     const note100 = 100;
//     const note50 = 50;
//     const note10 = 10;
    
//     var count100 = Math.floor(amount / note100);
//     amount = amount % note100;
  
//     var count50 = Math.floor(amount / note50);
//     amount = amount %  note50;
  
//     var count10 = Math.floor(amount / note10);
//     return {
//       note100: count100,
//       note50: count50,
//       note10: count10
//     };
//   }
//   var amount = parseInt(prompt("Enter the amount to be withdrawn in hundreds:"));

//   var currencyNotes = currencyNotes(amount);
//   console.log("Number of 100 rupee notes:", currencyNotes.note100);
//   document.write("Number of 100 rupee notes:", currencyNotes.note100,"</br>");
//   console.log("Number of 50 rupee notes:", currencyNotes.note50);
//   document.write("Number of 50 rupee notes:", currencyNotes.note50,"</br>");
//   console.log("Number of 10 rupee notes:", currencyNotes.note10);
//   document.write("Number of 10 rupee notes:", currencyNotes.note10,"</br>");
/*--------*************--------*/
  