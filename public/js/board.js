import Cell from "./Cell.js";

export default class board {
    constructor(selector) {
      this.element = document.querySelector(".board");
      this.cells = [];
      this.cells = Array.from({length: 64}, (_,index)=>{
          const rank = Math.floor(index / 8 +1)
          const files = ['A' , 'B' , 'C' , 'D' , 'E' , 'F' , 'G' , 'H']
          const file = files[index % 8];
          const cell = new Cell(
              rank,
              file
          )
          const fileNum = index % 8;
          this.element.appendChild(cell.element);
          if (rank % 2 === fileNum % 2) {
            cell.element.style.backgroundColor = "black"
          } else {
              cell.element.style.backgroundColor = 'white'
          }
      })
    }
  }

