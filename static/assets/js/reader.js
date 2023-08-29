/*SETTING BUTTON*/
const settingBtn = document.querySelector(".setting-btn");
const btnClose = document.querySelector(".offcanvas-bottom > .offcanvas-header > .btn-close");
const header = document.querySelector(".navbar")

settingBtn.addEventListener("click", function () {
    settingBtn.classList.toggle("setting-select");
    header.classList.toggle("z-1000");
});

btnClose.addEventListener("mousedown", function () {
    settingBtn.classList.remove("setting-select");
});
/*SETTING BUTTON*/
