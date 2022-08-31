import {game, updateGame} from './game.js'

export function keyboard() {
    document.addEventListener("keydown", (event) => {
        const key = event.keyCode; // 65 - 90 (Intervalo)
        
        if(isLetter(key)){
            const LETTER = event.key.toUpperCase();
            if (game.wrongLetter.includes(LETTER)) {
            } else {
                if(game.word.includes(LETTER)){
                    game.correctLetter.push(LETTER);
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

keyboard();