const myBtn = document.getElementById("myBtn")
const cntClic = document.getElementById("cntClic")

let nbClic = 0

myBtn.addEventListener("click", ()=>{
    nbClic++
console.log("You clicked", nbClic, "times");
cntClic.innerText = `You clicked ${nbClic} times`
})