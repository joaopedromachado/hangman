import {game} from './game.js';

export const createHangman = () => {
    const img = document.getElementById("hangman");
    let parts = game.wrongLetter.length;
    img.src = `./assets/images/hangman-${parts}.png`;
};