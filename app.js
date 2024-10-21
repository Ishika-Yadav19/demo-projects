document.getElementById("sigin-form").addEventListener("submit",function(event) {
    event.preventDefault();
    const username =
    document.getElementById('username').value;
    const password =
    document.getElementById("password").value;

    localStorage.setItem("username",username);
    localStorage.setItem("password",password);

    document.getAnimations("message").textContent = "Sign in successful!";

    setTimeout(() => {
        window.location.href = "welcom.html";
    }, 2000);
});