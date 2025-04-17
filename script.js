document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");

  const board = [
    document.querySelector(".about"),
    document.querySelector(".projects"),
    document.querySelector(".tecnologies"),
    document.querySelector(".certificates"),
    document.querySelector(".more"),
  ];

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("selected"));
      board.forEach((b) => (b.style.display = "none"));

      tab.classList.add("selected");
      board[index].style.display = "flex";
    });
  });

  tabs[0].classList.add("selected");
  board.forEach((b, i) => (b.style.display = i === 0 ? "flex" : "none"));
});
