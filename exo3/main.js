const input = document.getElementById('input');
const display = document.getElementById('display');
const checkbox = document.getElementById('checkbox') ;

const changeVisibility = () =>{
    if (input.getAttribute("type") === "password"){
input.setAttribute("type", "text")
display.innerText="Invisible"

    } else {
        input.setAttribute("type", "password")
        display.innerText="Visible"
    }

}

checkbox.addEventListener("click", ()=>{
    changeVisibility()
})