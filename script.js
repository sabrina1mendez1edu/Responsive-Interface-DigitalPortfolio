// Displays a welcome message when a user clicks the greeting button.

const greetingButton = document.querySelector("#greeting-button");
const greetingMessage = document.querySelector("#greeting-message");

greetingButton.addEventListener("click", function () {
    greetingMessage.textContent = "Welcome to my portfolio! Hope you enjoy exploring my projects and work. Feel free to reach out if you would like to reach out for collaboration. Thank you for visiting!";
});
