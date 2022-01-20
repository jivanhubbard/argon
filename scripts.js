document.getElementById("year").innerHTML = new Date().getFullYear();


window.onscroll = function() {myFunction()};

var header = document.getElementById("arHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

