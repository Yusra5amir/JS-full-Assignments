 /*i. Get element of id “main-content” and assign them in a variable.*/
// var mainContent = document.getElementById("main-content")

// /*ii. Display all child elements of “main-content” element.*/
// console.log(mainContent.childNodes);

// /*iii. Get all elements of class “render” and show their innerHTML in browser.*/
// var rendElement = document.getElementsByClassName("render")
// for(var i=0; i<=rendElement.length; i++){
//   var element = rendElement[i];
//   console.log(element.innerHTML)
// }

  // console.log("innerHTML of element",i+1, ":" ,rendElement[i]. innerHTML);
  //  console.log(element.innerHTML)
  // console.log(("innerHTML of element",i+1, ":",element.innerHTML))
  // document.write("innerHTML of element",i+1, ":",element)
  // document.write("innerHTML of element",i+1, ":" ,rendElement[i])
// }

// /*iv. Fill input value whose element id first-name using javascript.*/
// var firstNameInput = document.getElementById("firstName")
// firstNameInput.value = "Alex"
// console.log(firstNameInput)

// /* v. Repeat part iv for id ”last-name” and “email”.*/
// var lastNameInput = document.getElementById("lastName")
// lastNameInput.value = "Bank"
// console.log(lastNameInput)

// var emailInput = document.getElementById("email")
// emailInput.value = " alexbank@example.com"
// console.log(emailInput)



 /*2. use HTML code of question 1 and show the result on browser.
i. What is node type of element having id “form-content”.*/
// var content = document.getElementById("form-content")
// console.log("Node type of element with id 'form-content':",content.nodeType);

/*ii. Show node type of element having id “lastName” and its child node.*/
// var lastNameElement = document.getElementById("lastName")
// console.log("Node type of element with id 'lastName':",lastNameElement.nodeType);
// console.log("Node type of its child node with id 'lastName':",lastNameElement.firstChild.nodeType);

/*iii. Update child node of element having id “lastName”.*/
// var lastNameElement = document.getElementById("lastName")
// lastNameElement.firstChild.textContent = "New Last Name";
// console.log(lastNameElement)

/*iv. Get First and last child of id “main-content”.*/
// var mainContentElement = document.getElementById("main-content")
// var firstChild = mainContentElement.firstChild;
// var lastChild = mainContentElement.lastChild
// console.log(firstChild)
// console.log(lastChild)

/*v. Get next and previous siblings of id “lastName”.*/
// var lastNameElement = document.getElementById("lastName")
// var nextSibling = lastNameElement.nextSibling
// var previousSibling = lastNameElement.previousSibling
// console.log(nextSibling)
// console.log(previousSibling)

/*vi. Get parent node and node type of element having id “email” */
// var emailElement = document.getElementById("email")
// console.log("Parent node of element with id 'email':",emailElement.parentNode);
// console.log("Node type of element with id 'email':",emailElement.nodeType);
/*<--------**************-------->*/