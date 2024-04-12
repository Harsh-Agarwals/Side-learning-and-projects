let rand = Math.ceil(Math.random() * 20);

const heading = document.querySelector(".game h1");

const highScore = document.querySelector(".high-score");
const score = document.querySelector(".score");
const result = document.querySelector(".game-result");

const form = document.querySelector(".input-form");
const submit = document.querySelector('input[type="submit"]');

const guessDisplay = document.querySelector(".display-guess");
const again = document.querySelector(".again");

let maxScore = 10;
let highestScore = 0;
let chances = 10;

form.addEventListener("submit", (e) => {
    console.log(rand);
    const userGuessElement = document.getElementById("user_guess");
    const userGuess = document.getElementById("user_guess").value;
    e.preventDefault();
    if (again.classList.contains("hidden")) {
        again.classList.remove("hidden");
    }
    if (userGuess > rand) {
        result.innerHTML =
            '<p><i class="em em-chart_with_upwards_trend" aria-role="presentation" aria-label="CHART WITH UPWARDS TREND"></i> Too High</p>';
        result.style.color = "maroon";
        maxScore--;
    } else if (userGuess < rand) {
        result.innerHTML =
            '<p><i class="em em-chart_with_downwards_trend" aria-role="presentation" aria-label="CHART WITH DOWNWARDS TREND"></i> Too Low</p>';
        result.style.color = "blue";
        maxScore--;
    } else {
        guessDisplay.textContent = userGuess;
        result.innerHTML =
            '<p><i class="em em-boom" aria-role="presentation" aria-label="COLLISION SYMBOL"></i> Correct !!!</p>';
        result.style.color = "darkgreen";
        document.body.style.backgroundColor = "limegreen";
        userGuessElement.style.backgroundColor = "limegreen";
        submit.disabled = true;
        submit.style.cursor = "default";
        submit.classList.add("correct");
        score.textContent = maxScore;
        if (maxScore > highestScore) {
            highestScore = maxScore;
        }
        highScore.textContent = highestScore;
        chances = 10;
    }
    chances--;
    if (chances === 0) {
        heading.textContent = "GAME OVER!!! Refresh to ReStart!";
        submit.disabled = true;
        submit.style.backgroundColor = "black";
        submit.style.cursor = "default";
        again.classList.add("hidden");
    }
});

again.addEventListener("click", () => {
    chances = 10;
    maxScore = 10;
    rand = Math.ceil(Math.random() * 20);
    const userGuessElement = document.getElementById("user_guess");
    userGuessElement.style.backgroundColor = "gray";
    document.body.style.backgroundColor = "gray";
    userGuessElement.value = "";
    guessDisplay.textContent = "?";
    submit.classList.remove("correct");
    submit.disabled = false;
    submit.style.cursor = "pointer";
    result.innerHTML =
        '<p><i class="em em-gift" aria-role="presentation" aria-label="WRAPPED PRESENT"></i> Result</p>';
    result.style.color = "white";
    score.textContent = "";
    highestScore.textContent = "";
});
