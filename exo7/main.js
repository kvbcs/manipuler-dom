let loading = document.getElementById("loadingAnimation") ;
let content = document.getElementById("displayContent") ;

cwindow.onload = setTimeout(()=>{
content.style.display = "block"
loading.style.display = "none"
}, 3000)

