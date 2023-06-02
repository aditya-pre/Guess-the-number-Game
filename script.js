let compGuess = Math.floor(Math.random() * 100) + 1;
let score = 100;
let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    score = score - 1;
    const guessInput = document.getElementById("guessInput");
    const manGuess = parseInt(guessInput.value);
    if (isNaN(manGuess)) {
        showMessage("Please enter a valid number.");
    }
    else if (manGuess === compGuess) {
        showMessage("Congratulation you guessed right number");
        showScore(`You guess the actual number in ${100 - score} chances.`);
        guessInput.disabled = true;
    }
    else if (manGuess < 1 || manGuess > 100) {
        showMessage(`Please enter a number between 1 and 100.`);
    }
    else if (manGuess > compGuess) {
        showMessage(`Your number is ${manGuess - compGuess} greater than the Computer guessed number`);
    }
    else if (manGuess < compGuess) {
        showMessage(`Your number is ${compGuess - manGuess} smaller than the Computer guessed number`);
    }
    else {
        showMessage("Enter the number between 1 to 100");
    }
})


function showMessage(message) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
}
function showScore(score) {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = score;
}