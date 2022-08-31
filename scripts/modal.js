export const modal = document.querySelector(".container-modal");
const newgameBtn = document.querySelector(".newgame");
const element = document.querySelector(".modal-alert")


const showMenu = () => {
    modal.style.display = "flex"  
};

newgameBtn.addEventListener("click", showMenu)
