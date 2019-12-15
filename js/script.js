/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//

const studentList = document.getElementsByClassName("student-item");
const pageLimit = 10;

//

const showPage = (list, page) => {
   const startIndex = (page * pageLimit) - pageLimit;
   const endIndex = page * pageLimit;
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         studentList[i].style.display = "block";
      } else {
         studentList[i].style.display = "none";
      }
   }
};

showPage(studentList.length, 6);

//

const appendPageLinks = (list) => {
   const divPage = document.querySelector(".page");
   const div = document.createElement("div");
   const ul = document.createElement("ul");
   const maxPages = Math.ceil(list.length / pageLimit);
   div.className = "pagination";
   divPage.appendChild(div);
   div.appendChild(ul);
   for (let i = 0; i < maxPages; i++) {
      const page = i + 1
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.textContent = page;
      ul.appendChild(li);
      li.appendChild(a);
   if (page == 1) {
      a.className = "active";
   }
   a.addEventListener("click", (e) => {
      links = document.querySelectorAll("a.active");
      console.log(links);
      for (let i = 0; i < links.length; i++) {
         links[i].className = "";
      }
      //const activeLink = document.getElementsByClassName("active");
      //console.log(activeLink);
      //activeLink.className = "";
      e.target.className = "active";
      showPage(list, page)

      });
   }

   console.log(ul);
};

//

showPage(studentList, 1);
appendPageLinks(studentList);

// Remember to delete the comments that came with this file, and replace them with your own code comments.