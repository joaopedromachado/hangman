import * as modal from './modal.js';
import {selectRandomWord} from './selector.js';
import {showCorrectWord, showWrongWord} from './showuserword.js';
import {restartGame} from './restart.js';
import {showRepeatedLetter} from './modal.js';
import { keyboard } from './keyboard.js';

const reset = document.getElementById("reset");
const gameStatus = document.querySelector(".game-status");

export const game = {
    wrongLetter: [],
    correctLetter: [],
    word: selectRandomWord()
};

keyboard();

export const updateGame = () => {
    showCorrectWord(game);
    showWrongWord(game);
    createHangman();
    checkGame();
}


const createHangman = () => {
    const img = document.getElementById("hangman");
    let parts = game.wrongLetter.length;
    img.src = `./assets/images/hangman-${parts}.png`;
};

const checkGame = () => {
    const div = document.querySelector(".secret-word-content");
    if (div.innerText === game.word) {
        gameStatus.innerText = "Ganhou :D"
        alert(`A palavra era ${game.word}`)
    } else if (game.wrongLetter.length == 7){
        gameStatus.innerText = "Perdeu :C"
        alert(`A palavra era ${game.word}`)
    }
};

// Criar uma função anonima para executar a função exportada
reset.addEventListener("click", ()=>{
    restartGame(game);
});