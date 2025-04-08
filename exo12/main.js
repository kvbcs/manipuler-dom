function balanceScale() {
    let balanceIcon = document.querySelector("#balanceIcon");

    balanceIcon.innerHTML = "&#xf24e;"; 

    setTimeout(() => {
        balanceIcon.innerHTML = "&#xf516";
    }, 1000);

    setTimeout(() => {
        balanceIcon.innerHTML = "&#xf24e;";
    }, 2000);

    setTimeout(() => {
        balanceIcon.innerHTML = "&#xf515"; 
    }, 3000);
}

balanceScale();
setInterval(balanceScale, 4000);
