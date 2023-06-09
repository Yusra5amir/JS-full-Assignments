/* 1. Write a program that take two numbers & add them in a 
 new variable. Show the result in your browser.*/
// var num = 3 ;
// var number = 5;
// var add = 3 +5
// document.write("Sum of ", num , " and " ,number," is " , add);
/*<--------**************---------->*/


/* 2. Repeat task1 for subtraction, multiplication, division & modulus.*/
// var num = 3 ;
// var number = 5;
// var minus = num - number
// document.write("Difference of ",num, " and ",number," is ",minus + "<br\>")

// var num = 3 ;
// var number = 5;
// var multiply = num * number;
// document.write("Multiplication of ",num, " and ",number," is ",multiply + "<br\>")

// var num = 3 ;
// var number = 5;
// var divide = num / number;
// document.write("Division of ",num, " and ",number," is ",divide + "<br\>")

// var num = 3 ;
// var number = 5;
// var modulus = num % number;
// document.write("Modulus of ",num, " and ",number," is ",modulus)
/*<--------**************---------->*/


/*3. Do the following using JS Mathematic Expressions
a. Declare a variable.
b. Show the value of variable in your browser like “Value
after variable declaration is: ??”.
c. Initialize the variable with some number.
d. Show the value of variable in your browser like “Initial value: 5”.
e. Increment the variable.
f. Show the value of variable in your browser like “Value after increment is: 6”.
g. Add 7 to the variable.
h. Show the value of variable in your browser like “Value after addition is: 13”.
i. Decrement the variable.
j. Show the value of variable in your browser like “Value after decrement is: 12”.
k. Show the remainder after dividing the variable’s value by 3. 
l. Output : “The remainder is : 0”.*/
// var num;
// document.write("Value after declaration is ",num + "<br\>")
// var num = 5;
// document.write("Initial value: ", num+"<br\>")
// num++
// document.write("Value after incremeent is: ",num +"<br\>")
// var num = num+= 7;
// document.write("Value after addition is: ",num +"<br\>")
// num--
// document.write("Value after decrement is: ", num+"<br\>")
// var num = num % 3;
// document.write("The remainder: ",num)
/*<--------**************---------->*/


/* 4. Cost of one movie ticket is 600 PKR. Write a script to  store
 ticket price in a variable & calculate the cost of buying 5 
 tickets to a movie. Example output:*/
// var moviePrice= 600;
// var movieTotPrice = 600 * 5
// document.write("Total cost to buy 5 tickets to a movie is ",movieTotPrice)
/*<--------**************---------->*/


/*5. Write a script to display multiplication table of any number in your browser. E.g*/
// document.write("<h1>","Table of 16","</h1>")
// document.write("<div id='Multiplication-table'>","</div>")
//     var num = 16 ;
//     for(i=1 ; i<=10 ; i++){
//         document.write()
//        document.getElementById('Multiplication-table').innerHTML+= 
//        `${num} * ${i} = ${i * num} <br>`;
//     }
    /*------**************--------*/ 


/*6. The Temperature Converter: It’s hot out! Let’s make a 
converter based on the steps here.
a. Store a Celsius temperature into a variable.
b. Convert it to Fahrenheit & output “NNoC is NNoF”.
c. Now store a Fahrenheit temperature into a variable.
d. Convert it to Celsius & output “NNoF is NNoC”.*/
// var Celsius = 30;
// var formula = "F = (C * 9/5) + 32"
// var value = F = (Celsius * 9/5) + 32;
// document.write(Celsius,"°C is ",value , "°F","</br>")
// var fahrenheit = 82;
// var formula = "C = (F - 32) * (5/9)"
// var value = C = (fahrenheit - 32) * (5/9)
// document.write(fahrenheit +"°F is ",value , "°C")
 /*------**************--------*/ 



/*7. Write a program to implement checkout process of a shopping cart system 
for an e-commerce website. Store the following in variables
a. Price of item 1
b. Price of item 2
c. Ordered quantity of item 1
d. Ordered Quantity of item 2
e. Shipping charges*/
// var price1 = 650;
// var quantity1 = 3
// var cost1 = price1 * quantity1;
// document.write("Price of items 1 is ",price1, "<br\>")
// document.write("Quantity of item 1 is ","is ",quantity1, "<br\>")
// var price2 = 1000;
// var quantity2 = 2;
// var cost2 = price2 * quantity2;
// document.write("Price of items 2 is ",price2, "<br\>")
// document.write("Quantity of item 2 is ","is ",quantity2, "<br\>")
// var charges = 100;
// document.write("Shipping Charges is ",charges, "<br\>")
// var totCost = cost1 + cost2 + charges;
// document.write("Total cost of your order is ","<b>",totCost,"</b>")
/*<--------**************---------->*/


 /*8. Store total marks & marks obtained by a student in 2  variables. Compute the percentage & show the result in your browser*/
//  var totNum = "500"
//  var obtNum = "450"
//  var percent = (450 / 500) * 100;
//  document.write("<h1\>","Marks Sheet","<br\>","<h3\>")
//  document.write("Total marks: ", totNum, "<br\>");
//  document.write("Marks obtained: ",obtNum , "<br\>")
//  document.write("Percentage: ", percent ,"%")
     /*<--------**************---------->*/



/*9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. 
Perform all calculations in a single expression.(Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
and 1 Saudi Riyal = 28 Pakistani Rupee)*/
// var exchangeRate1 = (10 * 104.80 )+(25 * 28) 
// document.write("Total Currency in PKR: ","<b>", exchangeRate1 ,"<b\>") 
/*<--------**************---------->*/



/*10. Write a program to initialize a variable with some 
number and do arithmetic in following sequence:
a. Add 5
b. Multiply by 10
c. Divide the result by 2*/
// Perform all calculations in a single expression
// var numbers = (48 + 5)  * 10 / 2
// document.write(numbers)
/*<--------**************---------->*/



/*11. The Age Calculator: Forgot how old someone is? 
Calculate it!
a. Store the current year in a variable.
b. Store their birth year in a variable.
c. Calculate their 2 possible ages based on the stored 
values.
Output them to the screen like so: “They are either NN or NN
years old”.*/
// var currentYear = new Date()
// var birthYear = new Date("2004/12/20")
// var dif = currentYear - birthYear
// var diff = dif/(1000*60*60*24*365.25)
// var age = Math.floor(diff)
// document.write("Current Year: ",currentYear + "<br\>")
// document.write("Birth Year: ",birthYear, "<br\>")
// document.write("Your age: ",age);
/*<--------**************---------->*/



/*12. The Geometrizer: Calculate properties of a circle.
a. Store a radius into a variable.
b. Calculate the circumference based on the radius, and output “The circumference is NN”.
Calculate the area based on the radius, and output “The is NN”*/
// document.write("<h1>","The Geometrizer","</h1>")
// var radius = 18;
// var pi = 3.142;
// var circumference = 2 * pi * radius
// var area = pi * radius * radius
// console.log("circumference");
// document.write("Radius of a circle : ",radius, "<br\>")
// document.write("The circumference is ", circumference , "<br\>")
// document.write("The area is: ",area)
/*<--------**************---------->*/


/* 13. The Lifetime Supply Calculator: Ever wonder howmuch a “lifetime supply” of your favorite snack is? Wonder no more.
a. Store your favorite snack into a variable
b. Store your current age into a variable.
c. Store a maximum age into a variable.
d. Store an estimated amount per day (as a number).
e. Calculate how many would you eat total for the rest of your life.*/
// var favSnack = "Chocolatechip"
// var age = 15
// var maxAge = 65
// var amount = 3
// var curAge = maxAge - age 
// var total =  curAge * 365 * 3
// document.write("<h1/>","The Lifetime Supply Calculator","<h3\>")
// document.write("Favourite Snack: ",favSnack,"<br\>")
// document.write("Current Age: ",age ,"<br\>")
// document.write("Estimated Maximum Age: ",maxAge, "<br\>")
// document.write("Amount of snacks per day: ",amount, "<br\>")
// document.write("You will need ", total ," ", favSnack , " to last you untill the ripe old age of ", maxAge ,)
/*<--------**************---------->*/
