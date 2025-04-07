let password = document.getElementById("password");
let checkPassword = document.getElementById("checkpassword");
let message = document.getElementById("message");

checkPassword.addEventListener('keyup', () => {
    if (checkPassword.value === password.value) {
        message.style.color = "green";
        message.innerHTML = "Mot de passe identiques";
    } else {
        message.style.color = "red";
        message.innerHTML = "Mot de passe non identiques";
    }
});
