function balanceScale() {
let balanceIcon = document.querySelector("#balanceIcon")
balanceIcon.innerHTML = "&#xf24e;";
balanceIcon.setTimeout(() => {
    balanceIcon.innerHTML = "f516"
}, 1000);
}
    balanceScale();
    setInterval(balanceScale, 4000)