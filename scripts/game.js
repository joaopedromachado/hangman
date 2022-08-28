import {selectRandomWord} from './selector.js';
import {showCorrectWord, showWrongWord} from './showuserword.js';
import {restartGame} from './restart.js';

const reset = document.getElementById("reset");

const game = {
    wrongLetter: [],
    correctLetter: [],
    word: selectRandomWord()
};

document.addEventListener("keydown", (event) => {
    const key = event.keyCode; // 65 - 90 (Intervalo)
    
    if(isLetter(key)){
        const LETTER = event.key.toUpperCase();
        console.log(game.word)
        if (game.wrongLetter.includes(LETTER)) {
            console.log("Letra repetida")
        } else {
            if(game.word.includes(LETTER)){
                game.correctLetter.push(LETTER);
            } else {
                game.wrongLetter.push(LETTER);
            }
        }
        updateGame();
    }
})

const isLetter = (code) => {
    return code >= 65 && code <= 90;
}

const updateGame = () => {
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
        alert("Ganhou")
    } else if (game.wrongLetter.length == 7){
        alert("perdeu");
    }
};

// Criar uma função anonima para executar a função exportada
reset.addEventListener("click", ()=>{
    restartGame(game);
});