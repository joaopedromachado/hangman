import {game, updateGame} from './game.js'
import { modal } from './modal.js';

const div = document.querySelector(".secret-word-content");

export function keyboard() {
    document.addEventListener("keydown", (event) => {
        let key = event.keyCode; // 65 - 90 (Intervalo)

        if(isLetter(key)){
            const LETTER = event.key.toUpperCase();
            if (game.wrongLetter.includes(LETTER)) {
            } else {
                if(game.wrongLetter.length === 7 || div.innerText === game.word || modal.style.display === "flex"){
                    key = false;
                    console.log("Desativado")
                }else {
                    if(game.word.includes(LETTER)){
                        game.correctLetter.push(LETTER);
                    } else {
                        game.wrongLetter.push(LETTER);
                    }
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