import board from "./board.js";

const Board = new board('.board');

let divs = document.querySelector(".board");
let div = divs.childNodes
for(let i = 0; i < div.length;i++) {
    let img = document.createElement('img');
    img.classList.add('piece')
    if(i === 1 || i === 8) {
        img.src = "/public/materials/bk-drum.svg";
        div[i].appendChild(img)
    }
    if (i === 2 || i === 7) {
        img.src = "/public/materials/bk-horse.svg";
        div[i].appendChild(img)
    }
    if (i === 3 || i === 6) {
        img.src = "/public/materials/bk-elf.svg";
        div[i].appendChild(img)
    }
    if (i === 4) {
        img.src = "/public/materials/bk-queen.svg";
        div[i].appendChild(img)
    }
    if (i === 5) {
        img.src = "/public/materials/bk-king.svg";
        div[i].appendChild(img)
    }
    if (i > 8 && i < 17) {
        img.src = "/public/materials/bk-sold.svg";
        div[i].appendChild(img)
    }
    if (i > 48 && i < 57) {
        img.src = "/public/materials/wh-sold.svg";
        div[i].appendChild(img)
    }
    if (i === 57 || i === 64) {
        img.src = "/public/materials/wh-drum.svg";
        div[i].appendChild(img)
    }
    if (i === 58 || i === 63) {
        img.src = "/public/materials/wh-horse.svg";
        div[i].appendChild(img)
    }
    if (i === 59 || i === 62) {
        img.src = "/public/materials/wh-elf.svg";
        div[i].appendChild(img)
    }
    if (i === 60) {
        img.src = "/public/materials/wh-queen.svg";
        div[i].appendChild(img)
    }
    if (i === 61) {
        img.src = "/public/materials/wh-king.svg";
        div[i].appendChild(img)
    }
}

let cells = document.querySelector('.board').children

for( let i = 0; i<cells.length;i++){
    cells[i].addEventListener('click',select)
}

function select() {
    for (let i= 0 ; i< cells.length ; i++){
    cells[i].classList.remove('clicked')
    }
    if (this.children[0].src !==""){
    this.classList.toggle('clicked')
    }
}