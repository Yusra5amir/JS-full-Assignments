/* 1. Create a signup form and display form data in your web page on submission.*/
// document.getElementById("signupForm").addEventListener("submit", function(event) {
//         event.preventDefault();
//         var name = document.getElementById("name").value;
//         var email = document.getElementById("email").value;
//         var password = document.getElementById("password").value;
    
//         var formData = "Name: " + name + "<br>" +
//                        "Email: " + email + "<br>" +
//                        "Password: " + password + "<br>";
//          document.getElementById("formOutput").innerHTML = formData;
//     });
/* ---***********------*/


/* 2. Suppose in your webpage there is content area in which you have entered your item details, but user can only see 
some details on first look. When user clicks on “Read more” button, full detail of that particular item will be displayed. */
// var detailsParagraph = document.querySelector('.detailsParagraph');
// var readMoreButton = document.getElementById('readMoreButton');

// readMoreButton.addEventListener('click', function() {
//     if (detailsParagraph.style.display === 'none') {
//         detailsParagraph.style.display = 'block';
//         readMoreButton.innerHTML = 'Read less';
//       } 
//     else {
//         detailsParagraph.style.display = 'none';
//         readMoreButton.innerHTML = 'Read more';
//       }
// });
 /* ---***********------*/



/* 3. In previous assignment you have created a tabular data using javascript. Let’s modify that.
Create a form which takes student’s details and show each student detail in table. Each row of table must contain a delete button and 
an edit button. On click on delete button entire row should 
be deleted. On click on edit button, a hidden form will appear with the values of that row.*/
// function deleteRow(row){
//     var d = row.parentNode.rowIndex;
//     document.getElementById('dsTable').deleteRow(d);

//  }
// function editRow(row){
//     var edit = row.parentNode.rowIndex;
//     document.getElementById('dsTable').editRow(edit)
// }
