let btn = document.querySelector("#btn")
let snackbar = document.querySelector("#snackbar")
let timeoutId;

btn.addEventListener("click", ()=>{
    snackbar.style.visibility = "visible"
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
        snackbar.style.visibility = "hidden";
    }, 3000);
})

