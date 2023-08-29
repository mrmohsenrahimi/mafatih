/*OFFCANVAS CLOSE BUTTON*/
const barsClose = document.getElementById("bars-close");
const footer = document.querySelector(".footer");

barsClose.addEventListener("click", function () {
    if (!barsClose.classList.contains("close-offcanvas-start")) {
        barsClose.classList.add("close-offcanvas-start");
        barsClose.innerHTML = `<i class="fa-solid fa-close fa-xl"></i>`;
    }
    else if (barsClose.classList.contains("close-offcanvas-start")) {
        barsClose.classList.remove("close-offcanvas-start");
        barsClose.classList.add("btn-close-offcanvas");
        barsClose.innerHTML = `<i class="fa-solid fa-bars fa-xl"></i>`
    }
    footer.classList.toggle("z-1000");
});
/*OFFCANVAS CLOSE BUTTON*/