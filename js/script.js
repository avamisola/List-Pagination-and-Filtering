/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//select the student list items and set the limit of students per page
const studentList = document.getElementsByClassName("student-item");
const pageLimit = 10;

//function to display items from studentList based on page number
const showPage = (list, page) => {
   //create index range based on page number and pageLimit
   const startIndex = (page * pageLimit) - pageLimit;
   const endIndex = page * pageLimit;
   for (let i = 0; i < list.length; i++) {
      //if studentList item within index range then display it, else hide it
      if (i >= startIndex && i < endIndex) {
         studentList[i].style.display = "block";
      } else {
         studentList[i].style.display = "none";
      }
   }
};

//function to create page links, add click event, and mark active page
const appendPageLinks = (list) => {
   //creating ul under the designated div
   const divPage = document.querySelector(".page");
   const div = document.createElement("div");
   const ul = document.createElement("ul");
   const maxPages = Math.ceil(list.length / pageLimit);
   div.className = "pagination";
   divPage.appendChild(div);
   div.appendChild(ul);
   //loop to create list items with links
   for (let i = 0; i < maxPages; i++) {
      const page = i + 1
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.textContent = page;
      ul.appendChild(li);
      li.appendChild(a);
      //default page 1 to active page
      if (page == 1) {
         a.className = "active";
      }
      //add click event for each page link
      a.addEventListener("click", (e) => {
         links = document.querySelectorAll("a.active");
         console.log(links);
         //loop to make each page link inactive before assigning active page
         for (let i = 0; i < links.length; i++) {
            links[i].className = "";
         }
         e.target.className = "active";
         showPage(list, page)
      });
   }
};

//call showPage to display list of students, default to page 1
showPage(studentList, 1);
//call appendPageLinks to create page links under student list
appendPageLinks(studentList);
