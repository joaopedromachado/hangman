export const modal = document.querySelector(".container-modal");
const newgameBtn = document.querySelector(".newgame");
const div = document.createElement("div");
const element = document.querySelector(".modal-alert")


const showMenu = () => {
    modal.style.display = "flex"  
};

export const showRepeatedLetter = () => {
    div.className = "modal-alert"
    document.body.appendChild(div);
    div.innerText = "PALAVRA REPETIDA!!!"
    setInterval(() => {
        div.innerText = ""
    }, 2000);
};

function verifyElement(){
    if(typeof(element) != 'undefined' && element != null){
        document.body.removeChild(div);
    }
}



newgameBtn.addEventListener("click", showMenu)
