export const modal = document.querySelector(".container-modal");
const newgameBtn = document.querySelector(".newgame");
const closeBtn = document.querySelector("#closeBtn");
// const element = document.querySelector(".modal-alert")

closeBtn.addEventListener("click", ()=>{
    modal.style.display = "none";
})

const showMenu = () => {
    modal.style.display = "flex"  
};



newgameBtn.addEventListener("click", showMenu)
