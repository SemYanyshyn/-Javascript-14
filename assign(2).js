let main = document.getElementById("table");

main.onclick = function (event) {
  let target = event.target;
  if (target.classList.contains("close")) {
    const element = target.closest("section");
    element.remove();
  }
};
