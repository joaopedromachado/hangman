// import * as modal from './modal.js';
import {selectRandomWord} from './selector.js';
import {showCorrectWord, showWrongWord} from './showuserword.js';
import {restartGame} from './restart.js';
import {showRepeatedLetter} from './modal.js';
import { keyboard } from './keyboard.js';
import { createHangman } from './hangman.js';

const reset = document.getElementById("reset");
const gameStatus = document.querySelector(".game-status");

export const game = {
    wrongLetter: [],
    correctLetter: [],
    word: selectRandomWord()
};

export const updateGame = () => {
    showCorrectWord(game);
    showWrongWord(game);
    createHangman();
    checkGame();
}

const checkGame = () => {
    const div = document.querySelector(".secret-word-content");
    if (div.innerText === game.word) {
        gameStatus.innerHTML = "<h2>Você GANHOU!!!</h2>"
    } else if (game.wrongLetter.length == 7){
        gameStatus.innerText = `Você PERDEU!!! A palavra era ${game.word}.`;
    }
};

// Criar uma função anonima para executar a função exportada
reset.addEventListener("click", ()=>{
    restartGame(game);
});