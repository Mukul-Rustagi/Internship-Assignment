const explor = document.querySelector(".exploration-details");
console.log(explor);
const board = document.querySelector(".board-screenshot");
console.log(board);
const arrowImg = document.querySelector(".screenshot-from-2024-06-19-11-1");
console.log(arrowImg);
arrowImg.addEventListener("click", (e) => {
  console.log(e);
  if (!arrowImg.classList.contains("arrow-img-collapse")) {
    arrowImg.classList.add("arrow-img-collapse");
    board.classList.add("board-collapse");
    explor.classList.add("explor-collapse");
  } else {
    arrowImg.classList.remove("arrow-img-collapse");
    board.classList.remove("board-collapse");
    explor.classList.remove("explor-collapse");
  }
});
