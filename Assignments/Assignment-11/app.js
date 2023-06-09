/* 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable 
 titled fullName. Greet the user using his full name.*/
// var firstName = (prompt("Enter a First Name "))
// var lastName = (prompt("  Enter a Last Name"))
// var fullName = firstName + " " + lastName
// alert(fullName);
// alert("Congratulation! "+ fullName)
/* <!--------*************-------->*/



/* 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user 
 input in your browser*/
// var str = prompt("Enter your favourite mobile model is");
// var numChars = str.length;
// document.write("My favourite mobile modal is :", " " + str + "<br />")
// document.write("Length of string is :" , " " ,numChars)
/* <!--------*************-------->*/



/*3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser*/
// var country = "Pakistani"
// var index = country.indexOf("n");
// document.write("String :" ,  country,"<br\>");
// document.write("Index of 'n' ",index)
/* <!--------*************-------->*/



/* 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser*/
// var word = "Hello World"
// var lastIndex = word.lastIndexOf("l",word)
// document.write("String :" ,  word,"<br\>");
// document.write("Index of 'n' ",lastIndex)
/* <!--------*************-------->*/


/* 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.*/
// var country = "Pakistani"
// var lastIndex = country.indexOf("i")
// document.write("String :" ,  country,"<br\>");
// document.write("Index of 'n' ",lastIndex)
/* <!--------*************-------->*/


/*6. Repeat Q1 using string concat() method.*/
// var firstName = (prompt("Enter a First Name ",))
// var lastName = (prompt("  Enter a Last Name"))
// var fullName = firstName.concat(" ",  lastName)
// alert(fullName);
// alert("Congratulation! " + fullName)
/* <!--------*************-------->*/



/* 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser*/
// var city = "Hyderabad"
// var repCity = "Islam"
// var addCity = repCity.slice(0,5)
// var newCity = city.slice(5,9)
// document.write("City: ",city,"<br\>")
// document.write("After replacement: ",addCity + newCity)
/* <!--------*************-------->*/



/* 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.*/
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var replaced = message.replace(/and/g,"&");
// document.write("Original string : ",message,"</br>")
// document.write("Replaced string : ",replaced,"</br>")
/* <!--------*************-------->*/


// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
// var num = "458"
// var change = num.toString();
// document.write("Value: ",num,"<br\>")
// document.write("Type: string","<br\>")
// document.write("Value: ",change,"<br\>")
// document.write("Type: number")
/* <!--------*************-------->*/


// 10. Write a program that takes user input. Convert and show the input in capital letters.
// var userInput = (prompt("Enter any word"));
// console.log(userInput);
// console.log(userInput.toUpperCase());
// document.write("User Input : " , userInput.toLowerCase() + "<br />");
// document.write("Upper Case : ", userInput.toUpperCase())
/* <!--------*************-------->*/



/* 11. Write a program that takes user input. Convert and  show the input in title case.*/
// var userInput = (prompt("Enter any word"));
// console.log(userInput);
// var firstLetter = userInput[0];
// var Name = userInput.slice(1);
// document.write("User input : ",userInput,"<br\>")
// var yusra = firstLetter.toUpperCase() + userInput.toLowerCase();
// document.write("Title case : ",yusra);
/* <!--------*************-------->*/



/*  12. Write a program that converts the variable num to string.var num = 35.36 ; Remove the dot to display “3536” display in your browser.*/
// var num = 35.36;
// var change = num.toString().replace(".","");
// document.write("Number : ",num,"<br\>")
// document.write("Result : ", change,"<br\>")
/* <!--------*************-------->*/



/* 13. Write a program to take user input and store username in a variable. If the username contains any special symbol 
 among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .*/

//  var userName = (prompt("Enter your name"))
// if(userName.includes("@") || userName.includes(".") || userName.includes(",") || userName.includes("!")){
//      alert("Please enter a valid username");
// }
// else{
//     alert("congrats!You enter a valid username")
// }
/* <!--------*************-------->*/



/*14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]Write a program to enable “search by 
user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program 
should inform about its availability. Example:*/

// var items =  ["cake", "apple pie", "cookie", "chips", "patties"];
// var input = (prompt(`Welcome to Amir Backery.What do you want to order sir/maam?`));
// var index = items.indexOf(input.toLowerCase());
// if(index != -1){
//     alert("Item is found in the list")
// document.write("<b>",input ,"</b>"," is available at index "+ "<b>" ,  index ,"</b>" + " in our bakery");
// }
// else{
//     alert("We are sorry! Item is not found in the list") 
//     document.write("We are sorry!",input ,"is not available in our bakery")
// }
/* <!--------*************-------->*/



/*15. Write a program to take password as an input from user. The password must qualify these requirements:
a. It should contain alphabets and numbers
b. It should not start with a number
c. It must at least 6 characters long
If the password does not meet above requirements,prompt the user to enter a valid password.For character codes of a-z, A-Z & 0-9, refer to ASCII
table at the end of this document.*/
// var pass = (prompt("Enter a password:"))
// var alphabets = /[a-zA-Z]/.test(pass)
// var numbers = /[0-9]/.test(pass)
// // var start = /^[0-9]/.test(password);
// // var leastChar = password.length >= 6;
// if(!alphabets || !numbers){
//     alert("Please enter a valid password that contains alphabets and numbers, does not start with a number, and is at least 6 characters long.")
// }
// var start = /^[0-9]/.test(password);
// if(pass == start){
//     alert("Please enter a valid password that contains alphabets and numbers, does not start with a number, and is at least 6 characters long.")
// }
// var leastChar = password.length >= 6;
// if( pass != leastChar){
//     alert("Please enter a valid password that contains alphabets and numbers, does not start with a number, and is at least 6 characters long.")
// }
// else{
//     alert("Password is valid!")
// }
/* <!--------*************-------->*/


/* 16. Write a program to convert the following string to an array using string split method.
 var university = “University of Karachi”;Display the elements of array in your browser.*/
// var arr = "University of Karachi"
// var university = arr.split("")
// for (var i = 0; i < university.length; i++) {
//     document.write("<b>",university[i],"</b>" + "<br>");
//   }
/* <!--------*************-------->*/


/* 17. Write a program to display the last character of a user input.*/
// var userInput = (prompt("Enter any word"))
// var lastChar = userInput.charAt(userInput.length-1)
// document.write("User input: ",userInput,"<br\>")
// document.write("Lat character of input: ",lastChar)
/* <!--------*************-------->*/



/* 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.*/                    
// var sentence = "The quick brown fox jumps over the lazy dog"
// var wordCount = "the"
// var count = 0;
// var sentenceLowercase = sentence.toLowerCase();
// var wordLowercase = wordCount.toLowerCase();
// var words = sentenceLowercase.split(" ");

// for (var i = 0; i < words.length; i++) {
//     if (words[i] === wordLowercase) {
//       count++;
//     }
// }
// document.write("Sentence : ", sentence,"</br>")
// document.write("The word " + wordCount + " appears " + count + " times in the given string.");
/* <!--------*************-------->*/

