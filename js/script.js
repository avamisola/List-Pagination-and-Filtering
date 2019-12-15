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
   const divPage = document.querySelector(".page");
   const div = document.createElement("div");
   const ul = document.createElement("ul");
   const maxPages = Math.ceil(list.length / pageLimit);
   div.className = "pagination";
   divPage.appendChild(div);
   div.appendChild(ul);
   for (let i = 0; i < maxPages; i++) {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = i + 1;
      a.textContent = i + 1;
      ul.appendChild(li);
      li.appendChild(a);
   }
   console.log(maxPages);
   console.log(ul);
};



appendPageLinks(studentList);

// Remember to delete the comments that came with this file, and replace them with your own code comments.