let check = document.getElementById("check") ;
let result = document.querySelector("#result")

check.addEventListener("click", () => {
 const year = document.getElementById("year").value ;
 if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    return result.innerHTML = year + "est bisextile"
 } 
 return result.innerHTML = year + "est pas bisextile"
});