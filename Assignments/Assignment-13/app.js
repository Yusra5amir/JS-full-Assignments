/* 1. Write a program that displays current date and time in your browser.*/
// var currentDay = new Date();
// var dateString = currentDay.toString();
// document.write(dateString );
/* <!-----***********-------->*/

/* 2. Write a program that alerts the current month in words. For example December.*/
// var month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// var d = new Date();
// alert(month[d.getMonth()])
/* <!-----***********-------->*/


/* 3. Write a program that alerts the first 3 letters of the currentday, for example if today is Sunday then alert will show Sun*/
// var currentDay = "saturday"
// var day = currentDay.slice(0,3)
// alert("Today is "+ day)
/* <!-----***********-------->*/



/*4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today*/
// var currentDay = new Date()
// if(currentDay == "Saturday"|| "saturday", currentDay == "Sunday" || "sunday"){
//     alert("It's Fun Day")
//     console.log("It's Fun Day")
// }
// else if(currentDay != "Saturday"|| "saturday", currentDay != "Sunday" || "sunday"){
//     alert("It's working day")
// }
/* <!-----***********-------->*/

/* 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month 
else shows “Last days of the month”.*/
// var currentDate = new Date();
// var date = currentDate.getDate()
// if(date <= 15){
// document.write("First fifteen days of the month");
// }
// else{
//   document.write("Last days of the month");
// }
/* <!-----***********-------->*/

/* 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that  hasn't been declared beforehand. Use any variable you like to represent the Date object.*/
// var currentDate = new Date();
// var sec = currentDate.getTime();
// var min  = (sec - currentDate.getTimezoneOffset() * 60000) / 60000;
// var minutesSinceMidnight = min % 1440;
// var millisecondsSinceMidnight = sec % (24 * 60 * 60 * 1000);
// document.write("Current Date : ", currentDate +"<br\>");
// document.write("Elapsed minutes since midnight, Jan. 1, 1970: "  + minutesSinceMidnight +"<br\>")
// document.write("Elapsed milliseconds since midnight, Jan. 1, 1970: " + millisecondsSinceMidnight)
/* <!-----***********-------->*/



/* 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.*/
// var dt = new Date();
// var hour = dt.getHours();
// console.log(hour);
// var min = dt.getMinutes();
// console.log(min)
// if(hour >= 12 ){
//     console.log("It's PM")
//     alert("It's PM")
// }
// else{
//     console.log("It's AM")
//     alert("It's AM")
// }
/* <!-----***********-------->*/

/* 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.*/
// var laterDate = new Date("Dec. 31, 2022");
// var dateString = laterDate.toString();
// document.write(dateString)
/* <!-----***********-------->*/

/* 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan?
 Note: 1st Ramadan was on June 18, 2015*/
// var ramadan = new Date("June 18, 2015")
// var currentDate = new Date();
// var day = currentDate - ramadan
// var daysPassed = Math.floor(day / (1000 * 60 * 60 * 24));
// alert("Number of days passed since 1st Ramadan: " + daysPassed)
/* <!-----***********-------->*/


/* 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015*/
// var nowYear = new Date("Dec.5,2015")
// var sec = nowYear.getTime();
// var dateString = nowYear.toString();
// var year = ("Jan.1,2015")
// var sec = year - dateString;
// var secondsElapsed = Math.floor(sec / 1000);
// document.write("On reference date " ,dateString,"</br>")
// document.write("Seconds elapsed between the reference date and the beginning of 2015: " + secondsElapsed);
/* <!-----***********-------->*/

/* 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and 
 finally display the date object in your browser*/
// var currentDate = new Date();
// var currentHours = currentDate.getHours();
// currentDate.setHours(currentHours -1);
// document.write("Current date : ",currentDate,"</br>")
// document.write("1 hours ago,it was " + currentDate);
/* <!-----***********-------->*/



/* 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?*/
// var currentDay = new Date();
// var dateString = currentDay.toString();
// document.write("current date :",dateString +"<br\>")
// var backYear = new Date("May.27,1923")
// var yearString = backYear.toString();
// document.write("100 years back, " ,yearString)
/* <!-----***********-------->*/


/* 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser*/
// var age = (prompt("Enter your age"))
// document.write("Your age is ",age + "<br\>")
// var birthYear = 2023 - age
// document.write("Your birth year is ",birthYear)
/* <!-----***********-------->*/


/*Q no 14(on html page)*/

