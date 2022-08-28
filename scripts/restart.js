import { selectRandomWord } from "./selector.js";

const div = document.querySelector(".secret-word-content");
const div2 = document.querySelector(".wrong-letter");
const img = document.getElementById("hangman");

export const restartGame = (game) => {
    game.wrongLetter.length = 0;
    game.correctLetter.length = 0;
    game.word = selectRandomWord();
    div.innerText = ""; 
    div2.innerText = "";
    img.src = `./assets/images/hangman-0.png`;
};