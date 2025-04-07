var logo = document.getElementById('logo');
var value = 0;

function animLogo() {
  if (value < 240) {
    value++;
    console.log("valeur", value);

    logo.style.height = value + "px";
    logo.style.width = value + "px";
    logo.style.fontSize = value + "px";
  } else {
    clearInterval(interval); 
  }
}

var interval = setInterval(animLogo, 10);
