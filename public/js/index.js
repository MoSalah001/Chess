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
    const square = document.createElement("div");
    if (layout[i] === 1) {
      square.classList.add("box");
      board.appendChild(square);
      square.addEventListener("click", test);
    } else {
      square.classList.add("box2");
      board.appendChild(square);
      square.addEventListener("click", test);
    }
  }
  function test() {
    this.classList.toggle("active");
    console.log(this);
  }
};
