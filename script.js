const words = ["apple", "banana", "mango", "grape", "peach", "kiwi", "orange"];
let secretWord = words[Math.floor(Math.random() * words.length)];
let attempts = 5;

const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");
const hint = document.getElementById("hint");
const restartBtn = document.getElementById("restartBtn");

hint.textContent = `Hint: The word starts with '${secretWord.charAt(0).toUpperCase()}'`;

function checkGuess() {
    let guess = guessInput.value.trim().toLowerCase();

    if (guess === "") {
        message.textContent = "Invalid input! Please enter a word.";
        return;
    }

    if (guess === secretWord) {
        message.textContent = "Congratulations! You guessed the secret word!";
        document.body.style.backgroundColor = "lightgreen";
        endGame();
    } else {
        attempts--;
        if (attempts > 0) {
            message.textContent = `Incorrect guess. You have ${attempts} attempts left. Try again!`;
        } else {
            message.textContent = `Game over! The secret word was '${secretWord}'.`;
            document.body.style.backgroundColor = "lightcoral";
            endGame();
        }
    }
}

function endGame() {
    submitBtn.disabled = true;
    guessInput.disabled = true;
    restartBtn.style.display = "block";
}

restartBtn.addEventListener("click", () => {
    attempts = 5;
    secretWord = words[Math.floor(Math.random() * words.length)];
    hint.textContent = `Hint: The word starts with '${secretWord.charAt(0).toUpperCase()}'`;
    message.textContent = "";
    guessInput.value = "";
    submitBtn.disabled = false;
    guessInput.disabled = false;
    restartBtn.style.display = "none";
    document.body.style.backgroundColor = "";
});

submitBtn.addEventListener("click", checkGuess);
guessInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") checkGuess();
});

console.log(`Secret word (for testing): ${secretWord}`);
