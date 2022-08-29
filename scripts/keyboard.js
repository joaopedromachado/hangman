import {game, updateGame} from './game.js'
import { showRepeatedLetter } from './modal.js';

export function keyboard() {
    document.addEventListener("keydown", (event) => {
        const key = event.keyCode; // 65 - 90 (Intervalo)
        
        if(isLetter(key)){
            const LETTER = event.key.toUpperCase();
            console.log(game.word)
            if (game.wrongLetter.includes(LETTER)) {
                console.log("Letra repetida")
                showRepeatedLetter();
            } else {
                if(game.word.includes(LETTER)){
                    game.correctLetter.push(LETTER);
                    showRepeatedLetter();
                } else {
                    game.wrongLetter.push(LETTER);
                }
            }
            updateGame();
        }
    });
}

const isLetter = (code) => {
    return code >= 65 && code <= 90;
}