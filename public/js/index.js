window.onload = () => {
  console.log("done");
  const board = document.querySelector(".board");
  const width = 8;
  // legends
  // 0 = empty field 8am2
  // 1 - empty field fat7
  // 2 = tabya
  // 3 = horse
  // 4 = elephant
  // 9 = elephant reverse
  // 10 = horse reverse
  // 11 = tabya reverse
  // 5 = queen
  // 6 = king
  // 7 = soldier - dark
  // 8 = soldier - white
  // 12 = soldier black bright
  // 13 = soldier black dark
  // 14 & 15 = tabya and tabya reverse
  // 16 & 17 = horse and reverse horse
  // 18 & 19 = elf and reverse elf
  // 20 = bk queen
  // 21 = bk king
  // prettier-ignore
  const layout = [
    2,3,4,5,6,9,10,11,
    8,7,8,7,8,7,8,7,
    1,0,1,0,1,0,1,0,
    0,1,0,1,0,1,0,1,
    1,0,1,0,1,0,1,0,
    0,1,0,1,0,1,0,1,
    12,13,12,13,12,13,12,13,
    14,16,18,20,21,19,17,15
  ]

  for (let i = 0; i < layout.length; i++) {
    const square = document.createElement("div");
    const piece = document.createElement("img");
    if (layout[i] === 0) {
      square.classList.add("box");
      board.appendChild(square);
      square.addEventListener("click", test);
    } else if (layout[i] === 1) {
      square.classList.add("box2");
      board.appendChild(square);
      square.addEventListener("click", test);
    } else if (layout[i] === 2) {
      square.classList.add("box2");
      piece.src = "/public/materials/wh-drum.svg";
      square.appendChild(piece);
      board.appendChild(square);
      square.addEventListener("click", test);
    } else if (layout[i] === 3) {
      square.classList.add("box");
      piece.src = "/public/materials/wh-horse.svg";
      square.appendChild(piece);
      board.appendChild(square);
      square.addEventListener("click", test);
    } else if (layout[i] === 4) {
      square.classList.add("box2");
      piece.src = "/public/materials/wh-elf.svg";
      square.appendChild(piece);
      board.appendChild(square);
      square.addEventListener("click", test);
    } else if (layout[i] === 5) {
      square.classList.add("box");
      piece.src = "/public/materials/wh-queen.svg";
      square.appendChild(piece);
      board.appendChild(square);
      square.addEventListener("click", test);
    } else if (layout[i] === 6) {
      square.classList.add("box2");
      piece.src = "/public/materials/wh-king.svg";
      square.appendChild(piece);
      board.appendChild(square);
      square.addEventListener("click", test);
    } else if (layout[i] === 7) {
      square.classList.add("box2");
      piece.src = "/public/materials/wh-sold.svg";
      square.appendChild(piece);
      board.appendChild(square);
      square.addEventListener("click", test);
    } else if (layout[i] === 8) {
      square.classList.add("box");
      piece.src = "/public/materials/wh-sold.svg";
      square.appendChild(piece);
      board.appendChild(square);
      square.addEventListener("click", test);
    } else if (layout[i] === 9) {
      square.classList.add("box");
      piece.src = "/public/materials/wh-elf.svg";
      square.appendChild(piece);
      board.appendChild(square);
      square.addEventListener("click", test);
    } else if (layout[i] === 10) {
      square.classList.add("box2");
      piece.src = "/public/materials/wh-horse.svg";
      square.appendChild(piece);
      board.appendChild(square);
      square.addEventListener("click", test);
    } else if (layout[i] === 11) {
      square.classList.add("box");
      piece.src = "/public/materials/wh-drum.svg";
      square.appendChild(piece);
      board.appendChild(square);
      square.addEventListener("click", test);
    } else if (layout[i] === 12) {
      square.classList.add("box2");
      piece.src = "/public/materials/bk-sold.svg";
      square.appendChild(piece);
      board.appendChild(square);
      square.addEventListener("click", test);
    } else if (layout[i] === 13) {
      square.classList.add("box");
      piece.src = "/public/materials/bk-sold.svg";
      square.appendChild(piece);
      board.appendChild(square);
      square.addEventListener("click", test);
    } else if (layout[i] === 14) {
      square.classList.add("box2");
      piece.src = "/public/materials/bk-drum.svg";
      square.appendChild(piece);
      board.appendChild(square);
      square.addEventListener("click", test);
    } else if (layout[i] === 15) {
      square.classList.add("box");
      piece.src = "/public/materials/bk-drum.svg";
      square.appendChild(piece);
      board.appendChild(square);
      square.addEventListener("click", test);
    } else if (layout[i] === 16) {
      square.classList.add("box2");
      piece.src = "/public/materials/bk-horse.svg";
      square.appendChild(piece);
      board.appendChild(square);
      square.addEventListener("click", test);
    } else if (layout[i] === 17) {
      square.classList.add("box");
      piece.src = "/public/materials/bk-horse.svg";
      square.appendChild(piece);
      board.appendChild(square);
      square.addEventListener("click", test);
    } else if (layout[i] === 18) {
      square.classList.add("box2");
      piece.src = "/public/materials/bk-elf.svg";
      square.appendChild(piece);
      board.appendChild(square);
      square.addEventListener("click", test);
    } else if (layout[i] === 19) {
      square.classList.add("box");
      piece.src = "/public/materials/bk-elf.svg";
      square.appendChild(piece);
      board.appendChild(square);
      square.addEventListener("click", test);
    } else if (layout[i] === 20) {
      square.classList.add("box2");
      piece.src = "/public/materials/bk-queen.svg";
      square.appendChild(piece);
      board.appendChild(square);
      square.addEventListener("click", test);
    } else if (layout[i] === 21) {
      square.classList.add("box");
      piece.src = "/public/materials/bk-king.svg";
      square.appendChild(piece);
      board.appendChild(square);
      square.addEventListener("click", test);
    }
  }
  function test() {
    this.classList.toggle("active");
  }
};
