/* 1. Declare an empty array using JS literal notation to store student names in future.*/
// var studentNames = [];
// studentNames[1]="yusra";
// studentNames[0] = "abira"
// console.log(studentNames)
/* <!--------*************-------->*/


/* 2. Declare an empty array using JS object notation to store student names in future.*/
// var studentNames = {}
// studentNames[0] = "yusra";
// studentNames[1] = "abira";
// console.log(studentNames)
/* <!--------*************-------->*/


/* 3. Declare and initialize a strings array. var wel = ["Welcome to Pakistan"];*/
// var arr = ["Welcome to Pakistan"]
// alert(arr[0]);
// console.log(arr[0]);
/* <!--------*************-------->*/



/* 4. Declare and initialize a numbers array.*/
//  var num = [12 ,667 , 2354];
/* <!--------*************-------->*/


/* 5. Declare and initialize a boolean array.*/
// var boolean = [true,false]
/* <!--------*************-------->*/


/* 6. Declare and initialize a mixed array.*/ 
// var mixedArray = [1, "yusra", "is Now", "true", ["apple", "banana"]];
/* <!--------*************-------->*/


/*7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:*/
// var qualification = [" SSC"," HSC", " BCS", " BS", " BCOM", " MS", " M. Phil", " PhD"]
// document.write("<h1>", "Qualifications:","</h1>","<br\>")
// document.write("<h3>","1)",qualification[0],"<br\>")
// document.write("2)",qualification[1],"<br\>")
// document.write("3)",qualification[2],"<br\>")
// document.write("4)",qualification[3],"<br\>")
// document.write("5)",qualification[4],"<br\>")
// document.write("6)",qualification[5],"<br\>")
// document.write("7)",qualification[6],"<br\>")
// document.write("8)",qualification[7],"<h3/>","<br\>")
/* <!--------*************-------->*/



/*8. Write a program to store 3 student names in an array.Take another array to store score of these three students. 
Assume that total marks are 500 for each student, display the scores & percentages of students like:*/
// var stdName = ["Asia","Aiman", "Ayesha"];
// var score = [467 , 432 , 390];
// var percent = score [0] / 500 * 100
// var percent1 = score[1] / 500 * 100
// var percent2 = score[2] / 500 * 100
// document.write("Score of ",stdName[0],". Percentage: ",percent," %","<br\>")
// document.write("Score of ",stdName[1],". Percentage: ",percent1," %","<br\>")
// document.write("Score of ",stdName[2],". Percentage: ",percent2," %","<br\>")
/* <!--------*************-------->*/



/*9. Initialize an array with color names. Display the array elements in your browser.
a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
c. Add two more color to the beginning of the array.Display the updated array in your browser.
d. Delete the first color in the array. Display the updated array in your browser.
e. Delete the last color in the array. Display the updated array in your browser.
f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired 
position/index.Display the updated array in your browser.
g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then
remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser.*/

// var arr = ["red"," blue"," green"," black"," purple"," pink"]
// document.write("<h1>","Colors Array:","</h1>","<br\>",arr,"<br\>")

// var color = (prompt("Enter the color what you want to add to the beginning of the array "))
// var userColor = arr.unshift(color)
// document.write("Array after adding color to the beginning : ",arr,"</br>")

// var end = (prompt("Enter the color what you want to add to the end of the array "))
// var push = arr.push(end)
// document.write("Array after adding color to the end : " + arr + "</br>");

// var add =arr.unshift("purple", "orange");
// document.write("Array after adding two more colors to the beginning : " + arr + "</br>");

// var del = arr.shift()
// document.write("Array after deleting the first color : " + arr + "</br>");

// var delLast = arr.pop();
// document.write("Array after deleting the last color : " + arr + "<br>");

// var indexToAdd = prompt("Enter the index at which you want to add a color:");
// var colorToAdd = prompt("Enter the color to add at the specified index :");
// arr.splice(indexToAdd, 0, colorToAdd)
// document.write("Array after adding color at the specified index: " + arr + "<br>");

// var indexToDelete = prompt("Enter the index from which you want to delete color(s):");
// var numColorsToDelete = prompt("Enter the number of colors to delete :");
// arr.splice(indexToDelete, numColorsToDelete);
// document.write("Array after deleting colors from the specified index : " + arr+ "<br>");
/* <!--------*************-------->*/



/* 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.*/
// var scores = [350,400,279,150,300]
// document.write("Scores of Student: ",scores,"<br\>")
// var sort = scores.sort();
// document.write("Ordered Scores of Student: ",sort)
/* <!--------*************-------->*/


/* 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.*/
// var city = ["Karachi" , "Lahore" ,"Islamabad" ,"Punjab" , "Faislabad"];
// document.write("Cities list:","<br\>",city,"<br\>","<br\>")
// var selectedCities = city.splice(1,3,);
// document.write ("Selected cities list:","<br\>",selectedCities,"<br\>");
/* <!--------*************-------->*/



/* 12. Write a program to create a single string from the below mentioned array: var arr = [“This ”, “ is ”, “ my ”, “ cat”];*/
// var array = ["This ", " is ", " my ", " cat"]
// document.write("<h1>","Array: ","<br\>",array,"<br\>")
// var arrJoin = array.join("");
// document.write("Sting: ","<br\>",arrJoin)
/* <!--------*************-------->*/


/*13. Create a new array. Store values one by one in such a way
that you can access the values in the order in which they were stored. (FIFO-First In First Out)*/
// document.write("Devices:","<br\>");
//   var devices = ["keyboard " , " mouse ", " printer " ," monitor"]
//   document.write(devices,"<br\>","<br\>")
//   document.write("out","<br\>")
//   document.write(devices[0],"<br\>")
//   document.write("out","<br\>")
//   document.write(devices[1],"<br\>") 
//   document.write("out","<br\>")
//   document.write(devices[2],"<br\>") 
//    document.write("out","<br\>")
//   document.write(devices[3],"<br\>")
/* <!--------*************-------->*/



/* 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)*/
// document.write("Devices:","<br\>");
//   var devices = ["keyboard " , " mouse ", " printer " ," monitor"]
//   document.write(devices,"<br\>","<br\>")
//   document.write("out","<br\>")
//   document.write(devices[3],"<br\>")
//   document.write("out","<br\>")
//   document.write(devices[2],"<br\>") 
//   document.write("out","<br\>")
//   document.write(devices[1],"<br\>") 
//    document.write("out","<br\>")
//   document.write(devices[0],"<br\>")
/* <!--------*************-------->*/



/* 15. Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array. 
 Display the following dropdown/select menu in your browser using document.write() method:*/
// var mobile = ["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"]
// var dropdown = "<select>";
// for (var i = 0; i < mobile.length; i++) {
//   dropdown += "<option value=" + mobile[i] + ">" + mobile[i] + "</option>";
// }
// "</select>";
// document.write(dropdown);
/* <!--------*************-------->*/










