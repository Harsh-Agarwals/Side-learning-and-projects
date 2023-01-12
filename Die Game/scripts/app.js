const heading = document.querySelector("header h1");

const die1 = document.querySelector(".die-1");
const die2 = document.querySelector(".die-2");

const buttons = document.querySelectorAll(".btn");
const footer = document.querySelector("footer");

const randomDieOutput = () => Math.ceil(Math.random() * 6);

let game = 0;
let win1 = 0;
let win2 = 0;

let headContent = (game, player) => `Game ${game + 1}: PLAYER-${player} WON!! <i
                class="em em-triangular_flag_on_post flag hidden"
                aria-role="presentation"
                aria-label="TRIANGULAR FLAG ON POST"
                ></i>`;

for (let btn of buttons) {
    btn.addEventListener("click", () => {
        if (btn.innerText == "Play Game") {
            const results = document.querySelectorAll(".result");
            for (let result of results) {
                result.remove();
            }
            const res1 = randomDieOutput();
            const res2 = randomDieOutput();

            die1.setAttribute("src", `./images/dice${res1}.png`);
            die2.setAttribute("src", `./images/dice${res2}.png`);

            const paraResult1 = document.createElement("p");
            const paraResult2 = document.createElement("p");
            paraResult1.textContent = res1;
            paraResult1.classList.add("score");
            paraResult2.textContent = res2;
            paraResult2.classList.add("score");

            die1.parentElement.insertAdjacentElement("beforeend", paraResult1);
            die2.parentElement.insertAdjacentElement("beforeend", paraResult2);

            if (res1 > res2) {
                heading.innerHTML = headContent(game, 1);
                win1++;
            } else if (res1 < res2) {
                heading.innerHTML = headContent(game, 2);
                win2++;
            } else {
                heading.innerHTML = `Game ${game + 1} DRAW!!! <i
                class="em em-triangular_flag_on_post flag hidden"
                aria-role="presentation"
                aria-label="TRIANGULAR FLAG ON POST"
                ></i>`;
            }
            game++;
        } else if (btn.innerText == "Final Score") {
            const finalScore = document.createElement("p");
            if (game === 0) {
                finalScore.textContent = "Play the game first!!";
            } else {
                if (win1 > win2) {
                    finalScore.textContent = `Player 1 Won the game! 1: ${win1}, 2: ${win2}`;
                    heading.innerHTML = "Player 1 Won!";
                } else if (win2 > win1) {
                    finalScore.textContent = `Player 2 Won the game! 1: ${win1}, 2: ${win2}`;
                    heading.innerHTML = "Player 2 Won!";
                } else {
                    finalScore.textContent = `Game Draw 1: ${win1}, 2: ${win2}`;
                    heading.innerHTML = "Game Draw!";
                }
            }
            footer.insertAdjacentElement("beforebegin", finalScore);
            finalScore.classList.add("result");
        } else {
            game = 0;
            win1 = 0;
            win2 = 0;
            const results = document.querySelectorAll(".result");
            const ps = document.querySelectorAll(".score");
            for (let result of results) {
                result.remove();
            }
            for (let p of ps) {
                p.remove();
            }
            heading.textContent = "DIE GAME";
        }
    });
}
