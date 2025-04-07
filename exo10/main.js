let check = document.getElementById("check") ;
let result = document.querySelector("#result")

check.addEventListener("click", () => {
 let year = document.getElementById("year").value ;
 if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    return result.innerHTML = "c'est bisextile"
 } 
 return result.innerHTML = "c'est pas bisextile"
});