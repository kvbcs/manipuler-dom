let html = document.querySelector("html")
let height = window.innerHeight;
let progressBar = document.querySelector(".progress-bar")
window.onscroll = function() { scrollIndicator() } ;
function scrollIndicator() {
  let windowScroll = height + window.scrollY
  console.log(windowScroll)
  let result = windowScroll / height * 100
  console.log("result", result);
  progressBar.style.width = result + "px"
}