let loading = document.getElementById("loadingAnimation") ;
let content = document.getElementById("displayContent") ;

const myTimeout = setTimeout(()=>{
content.style.display = "block"
loading.style.display = "none"
}, 3000)

window.onload.clearTimeout(myTimeout);
