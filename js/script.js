
const launchForm = document.getElementById("launch-form");
const usernameInput = document.getElementById("minecraft-username");
const launchMessage = document.getElementById("launch-message");

launchForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = usernameInput.value.trim();

    const validUsername = /^[a-zA-Z0-9_]{3,16}$/;

    if (!validUsername.test(username)) {
        launchMessage.textContent =
            "Please enter a valid Minecraft username.";
        return;
    }

    launchMessage.textContent =
        "Username accepted! Server requests are coming soon.";

    console.log("Server request prepared for:", username);
});

