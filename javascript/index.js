// attempt at a quine
document.getElementById("quine").innerHTML = document.documentElement.innerHTML.replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;");

//Menu Toggle for media 700px and smaller
var menuList = document.getElementById("menuList");
var feedback = document.getElementById("feedback");
var minWidth = document.body.scrollWidth;
var minHeight = window.innerHeight;
feedback.innerHTML = minWidth +"<br>" + minHeight;



const elements = document.getElementsByClassName("menu-icon")[0];
const cssObj = window.getComputedStyle(elements, null);

let dis = cssObj.getPropertyValue("display");

menuList.style.maxHeight = "0%"
function togglemenu() {
    if (menuList.style.maxHeight == "0%")
    {
      menuList.style.maxHeight ="100%";
    }
    else
    {
      menuList.style.maxHeight ="0%";
    }
  }





// function togglemenu(){
//   if (minWidth <= 700){
//     if (menuList.style.maxHeight == "0px")
//     {
//       menuList.style.maxHeight ="130px";
//     }
//     else
//     {
//       menuList.style.maxHeight ="0px";
//   }
// }













  // function togglemenu() {
  //   console.log(menuList.style.maxHeight)
  //   if (menuList.style.maxWidth => "700px")
  //   {
  //     menuList.style.maxHeight ="0%";
  //   }
  //   else
  //   {
  //     menuList.style.maxHeight ="100%";
  //   }
  // }

//Website Counter
var counterContainer = document.querySelector(".website-count");
var visitCount = localstorage.getitem("page_view");

visitCount = 1;
localstorage.setItem("page_view",1)

visitCount = Number(visitCount) + 1;
localstorage.setItem("page_view", visitCount);

counterContainer.innerHTML = visitCount;







//
// var counterContainer = document.querySelector(".website-counter");
// var resetButton = document.querySelector("#reset");
// var visitCount = localStorage.getItem("page_view");
//
// Check if page_view entry is present
// if (visitCount) {
//   visitCount = Number(visitCount) + 1;
//   localStorage.setItem("page_view", visitCount);
// } else {
//   visitCount = 1;
//   localStorage.setItem("page_view", 1);
// }
// counterContainer.innerHTML = visitCount;
