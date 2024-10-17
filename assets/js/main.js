const themeBtn = document.getElementById("colorTheme");
themeBtn.addEventListener("click", () => {
  document.querySelector("body").toggleAttribute("dark");
});
