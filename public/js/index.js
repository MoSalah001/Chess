window.onload = () => {
  console.log("done");
  const board = document.querySelector(".board");
  const width = 8;
  for (let i = 0; i < width * width; i++) {
    const squre = document.createElement("div");
    if (i > i + 2) {
      squre.classList.add("box");
      board.appendChild(squre);
    } else {
      squre.classList.add("box2");
      board.appendChild(squre);
    }
  }
};
