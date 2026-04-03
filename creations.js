// *****************FILTRES************************

const buttons = document.querySelectorAll(".button");
const items = document.querySelectorAll(".container_img");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.category;

    items.forEach((item) => {
      const img = item.querySelector("img");

      if (category === "tous") {
        item.style.display = "block";
      } else {
        item.style.display = img.classList.contains(category)
          ? "block"
          : "none";
      }
    });
  });
});
