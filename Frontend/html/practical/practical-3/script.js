const toggleButton = document.getElementById("theme-toggle");
const html = document.documentElement;

toggleButton.addEventListener("click", () => {
  if (html.getAttribute("data-theme") === "dark") {
    html.removeAttribute("data-theme");
    toggleButton.textContent = "Dark";
  } else {
    html.setAttribute("data-theme", "dark");
    toggleButton.textContent = "Light";
  }
});
