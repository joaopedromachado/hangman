export const showCorrectWord = (game) => {
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
};

export const showWrongWord = (game) => {
    const div2 = document.querySelector(".wrong-letter");
    div2.innerHTML = "<h2>Letras Erradas</h2>";
    game.wrongLetter.forEach((letter) => {
        div2.innerHTML += `<span >${letter}</span>`;
    });
}