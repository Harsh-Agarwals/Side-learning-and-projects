randn = Math.ceil(Math.random() * 100);

const btn = document.querySelector(".guess_btn");
const user_guess = document.getElementById("guess_box");

const lowOrHigh = document.getElementsByClassName("lowOrHigh");
const prevGuess = document.getElementsByClassName("previousGuesses");
const guessResult = document.getElementsByClassName("guessResult");

chance = 1;

function checkGuess() {
    const userGuess = user_guess.value;
    if (chance == 1) {
        prevGuess.textContent = "";
        lowOrHigh.textContent = "";
        guessResult.textContent = "";
    } else {
        prevGuess.textContent += String(userGuess);
        if (userGuess == randn) {
            guessResult.textContent = "Congratulations! You got it right!";
            guessResult.style.backgroundColor = "Green";
            lowOrHigh.textContent = "";
        } else if (userGuess != randn) {
            guessResult.textContent = "Wrong!";
            guessResult.style.backgroundColor = "Red";
            if (userGuess > randn) {
                lowOrHigh.textContent = "Your guess was too high.";
            } else {
                lowOrHigh.textContent = "Your guess was too low.";
            }
        }
    }
}

btn.addEventListener("click", () => {
    if (chance <= 10) {
        const user_guess = document.getElementById("guess_box").value;
        console.log(user_guess);
        console.log(chance);
        chance = chance + 1;
    }
});

if (chance == 11) {
    btn.disabled = true;
    document.getElementsByClassName("newGame").style.display = "block";
}
