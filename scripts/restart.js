import { selectRandomWord } from "./selector.js";
import {modal} from "./modal.js";

const div = document.querySelector(".secret-word-content");
const div2 = document.querySelector(".wrong-letter");
const img = document.getElementById("hangman");
const gameStatus = document.querySelector(".game-status");

export const restartGame = (game) => {
    game.wrongLetter.length = 0;
    game.correctLetter.length = 0;
    game.word = selectRandomWord();
    gameStatus.innerText = "";
    div.innerText = ""; 
    div2.innerText = "";
    img.src = `./assets/images/hangman-0.png`;

    modal.style.display = "none";
};