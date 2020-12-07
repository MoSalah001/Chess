window.onload = () => {
  console.log("done");
  const board = document.querySelector(".board");
  const width = 8;
  // prettier-ignore
  const layout = [
    1,0,1,0,1,0,1,0,
    0,1,0,1,0,1,0,1,
    1,0,1,0,1,0,1,0,
    0,1,0,1,0,1,0,1,
    1,0,1,0,1,0,1,0,
    0,1,0,1,0,1,0,1,
    1,0,1,0,1,0,1,0,
    0,1,0,1,0,1,0,1
  ]

  for (let i = 0; i < layout.length; i++) {
    const squre = document.createElement("div");
    if (layout[i] === 1) {
      squre.classList.add("box");
      board.appendChild(squre);
    } else {
      squre.classList.add("box2");
      board.appendChild(squre);
    }
  }
};
