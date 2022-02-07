let verticalMenus = document.querySelectorAll("nav:nth-child(2) a");

function verticalIndicator(e) {
    verticalBar.style.left = e.offsetLeft + "px";
    verticalBar.style.width = e.offsetWidth + "px";
    verticalBar.style.top = e.offsetTop + e.offsetHeight + "px";
  }

verticalMenus.forEach((menu) =>
  menu.addEventListener("click", (e) => verticalIndicator(e.currentTarget))
);