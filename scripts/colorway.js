const elements = document.querySelectorAll(".colorway");
const colorway = "colorway";

const colors = [
    '#A31621',
    '#053C5E',
    '#7E78D2',
    '#6A8D73',
    '#F0A868',
    '#58355E',
    '#403233',
    '#8EA604',
    '#57A773',
    '#FF4E00',
    '#F19A3E',
    '#F6AF65',
    '#08B2E3',
    '#FF01FB',
    '#EE6352'
];

const randomColor = () => {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

const changeColor = () => {
    elements.forEach(element => {
        element.style.color = randomColor();
    })
};

setInterval(changeColor, 250)