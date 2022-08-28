import { theme_Selector } from "./word_list.js";

const input = document.getElementById("addWord");
var select = document.querySelector("#theme_Id");
var value;


select.addEventListener("change", themeSelector);

function themeSelector(value){
    value = parseInt(select.options[select.selectedIndex].value);
    return value;
};

export const arrayList = (arr) => {
    var arr = theme_Selector[themeSelector(value)];
    return arr;
};

export function selectRandomWord() {
    let arr = arrayList();
    let random = Math.floor(Math.random() * arr.length);

    return arr[random].toUpperCase();
};

input.addEventListener("change", () => {
    let arr = arrayList();
    let typeTheme = themeSelector();
    let word = input.value;

    if (typeTheme === 0 || typeTheme === 1 || typeTheme === 2) {
        if (arr.indexOf(word) === -1) {
            arr.push(word);
            console.log(`A nova palavra da lista é ${word}.`);
        } else if (arr.indexOf(word) > -1) {
            console.log(`${word} já existe na lista!`);
        }
    }
    else {
        console.log("Error.");
    }
})


// const arr = arrayList();
// const typeTheme = themeSelector();

