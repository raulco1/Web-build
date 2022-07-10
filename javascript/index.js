// attempt at a quine
document.getElementById("quine").innerHTML = document.documentElement.innerHTML.replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
// Make it so it resize text to fit within webpage


// //Website Counter
// var counterContainer = document.querySelector(".website-counter");
// var visitCount = localstorage.getitem("page_view");
//
// visitCount = 1;
// localstorage.setItem("page_view",1)
//
// visitCount = Number(visitCount) + 1;
// localstorage.setItem("page_view", visitCount);
//
// counterContainer.innerHTML = visitCount;


var counterContainer = document.querySelector(".website-counter");
var resetButton = document.querySelector("#reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount) + 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;
