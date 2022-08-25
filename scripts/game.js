// criar elemento, elemento recebe valor
const keys = document.querySelectorAll(".keyboard-content span");
// const div = document.querySelector(".keyboard-content");

var game = {
    wrongLetter: [],
    correctLetter: [],
    word: selectRandomWord()
}

document.addEventListener("keydown", (event) => {
    const key = event.keyCode; // 65 - 90 (Intervalo)

    if(isLetter(key)){
        const LETTER = event.key;
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
    showCorrectWord();
    showWrongWord();
    createHangman();
    checkGame();
}

const showCorrectWord = () => {
    const div = document.querySelector(".secret-word-content");
    var getWord = game.word.split("");
    div.innerHTML = "";
    getWord.forEach(word => {  
        if(game.correctLetter.includes(word)){
            div.innerHTML += `<span>${word}</span>`
        } else {
            div.innerHTML += `<span>_</span>`
        }
    })
}

const showWrongWord = () => {
    const div2 = document.querySelector(".wrong-letter");
    div2.innerHTML = "<h2>Letras Erradas</h2>";
    game.wrongLetter.forEach((letter) => {
        div2.innerHTML += `<span >${letter}</span>`;
    });
}

const createHangman = () => {
    const img = document.getElementById("hangman");
    let parts = game.wrongLetter.length;
    img.src = `/assets/images/hangman-${parts}.png`
};

const checkGame = () => {
    const div = document.querySelector(".secret-word-content");
    if (div.innerText === game.word) {
        alert("Ganhou")
    } else if (game.wrongLetter.length === 7){
        alert("perdeu");
    }
};


// const createKeyboard = () => {
    //     keys.forEach(key => {
//         key.classList.add("key-style-btn")
//         key.addEventListener("click", (event) => {
//             let current = event.target.innerText;
//             console.log(current)
//             return current;
//         })
//     })
// };

// const createElement = () => {
    
    
// }

// createKeyboard();