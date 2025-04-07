let villes = ["Bordeaux", "Nantes", "Lyon", "Marseille",
    "Monptellier","Paris","Rennes","Strasbourg"];
    let distance = [950,850,450,800,1000,460,840,0];
let checkDistance = document.querySelector("#check-distance")
let btn = document.querySelector("#btn")
let dist = null
btn.addEventListener("click", (e)=>{
    dist = checkDistance.value
    for (let i =0; i<villes.length; i++){
 if (dist >= distance[i]){
document.write("ville atteinte :" +villes[i] +"<br>")  
    }
   
  }
})

