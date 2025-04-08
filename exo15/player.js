let player = document.getElementById('player');
let gameContainer = document.querySelector("#gameContainer")
let moveSize = 0;
let topWall = gameContainer.offsetTop;
let leftWall = gameContainer.offsetLeft;
let rightWall = gameContainer.offsetWidth;
let bottomWall = gameContainer.offsetHeight;

console.log(topWall, leftWall, rightWall, bottomWall);

document.addEventListener('keydown', (event) => {
    
 if (event.code == 'ArrowDown' && player.offsetTop + player.offsetHeight + 10 <= bottomWall) {
moveSize += 10;
player.style.top = moveSize + "px";
player.style.backgroundImage = `url("/exo15/img/face.png")` 
console.log(player.offsetTop + player.offsetHeight);
 }

 if (event.code == 'ArrowUp' && player.offsetTop >= topWall) {
    moveSize -= 10;
    player.style.top = moveSize + "px";
    player.style.backgroundImage = `url("/exo15/img/back.png")`
    console.log(player.offsetTop);
    }
     
     if (event.code == 'ArrowLeft' && player.offsetLeft + gameContainer.offsetLeft - 10 >= leftWall) {
        moveSize -= 10;
        player.style.left = moveSize + "px";
        player.style.backgroundImage = `url("/exo15/img/left.png")`
        console.log(player.offsetLeft);
         }

         if (event.code == 'ArrowRight' && player.offsetLeft + player.offsetWidth + 10 <= rightWall) {
            console.log(player.offsetLeft + player.offsetWidth)
            moveSize += 10;
            player.style.left = moveSize + "px";
            player.style.backgroundImage = `url("/exo15/img/right.png")`
             }
});