/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//

const studentList = document.getElementsByClassName("student-item");
const pageLimit = 10;
//console.log(studentList)

//

const showPage = (list, page) => {
   const startIndex = (page * pageLimit) - pageLimit;
   const endIndex = page * pageLimit;
   for (let i = 0; i < studentList.length; i++) {
      if (i >= startIndex && i < endIndex) {
         //console.log(studentList[i]);
         console.log(i);
      }
   }
};

showPage(studentList.length, 6);

/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

const appendPageLinks = (list) => {
   let div = document.createElement("div");
   div.className = "pagination";
   console.log(div);
   divPage = document.querySelector(".page");
   console.log(divPage);
   div = divPage.appendChild(div);
   console.log(div);

};

appendPageLinks();

// Remember to delete the comments that came with this file, and replace them with your own code comments.