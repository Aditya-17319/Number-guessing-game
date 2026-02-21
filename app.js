let random;
let max;

const startBtn = document.getElementById("startBtn");
const guessBtn = document.getElementById("guessBtn");
const quitBtn = document.getElementById("quitBtn");

const maxInput = document.getElementById("maxNum");
const guessInput = document.getElementById("guessInput");

const message = document.getElementById("message");
const gameArea = document.getElementById("gameArea");

startBtn.addEventListener("click", function () {
    max = parseInt(maxInput.value);

    if (!max || max <= 0) {
        alert("Please enter valid max number");
        return;
    }

    random = Math.floor(Math.random() * max) + 1;
    gameArea.classList.remove("hidden");
    message.textContent = "Game Started! 🎮";
    guessInput.value = "";
});

guessBtn.addEventListener("click", function () {
    let guess = parseInt(guessInput.value);

    if (guess === random) {
        message.textContent = "🎉 You are right! Congrats!";
    } else if (guess < random) {
        message.textContent = "Too small! Try again.";
    } else {
        message.textContent = "Too large! Try again.";
    }
    guessInput.value = "";
});

quitBtn.addEventListener("click", function () {
    message.textContent = "User quit the game.";
});