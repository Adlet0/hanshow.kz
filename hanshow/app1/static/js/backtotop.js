document.addEventListener("DOMContentLoaded", () => {
  const scrollBtn = document.getElementById("backToTop");

  if (!scrollBtn) return; // если кнопка не найдена — выходим

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
