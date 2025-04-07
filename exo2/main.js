var btn = document.getElementById("btn")
var result = document.getElementById("result")
let pileFace

const PileOuFace = () =>{
pileFace = Math.floor(Math.random() * 2);
if (pileFace === 1){
     pileFace = "face"
} else {
      pileFace = "pile"
}
}

btn.addEventListener("click", () =>{
    PileOuFace()
    result.innerHTML = pileFace
    console.log(pileFace);
})