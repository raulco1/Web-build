// attempt at a quine
document.getElementById("quine").innerHTML = document.documentElement.innerHTML.replace(/\&/g, "&amp;").replace(/\</g, "&lt;").replace(/\>/g, "&gt;");
// Make it so it resize text to fit within webpage 
