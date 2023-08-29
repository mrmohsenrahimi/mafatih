const settingBtn = document.querySelector(".setting-btn");
const btnClose = document.querySelector(".offcanvas-bottom > .offcanvas-header > .btn-close");

settingBtn.addEventListener("click", function () {
    settingBtn.classList.toggle("setting-select");
    console.log("nane");
});

btnClose.addEventListener("mousedown", function () {
    settingBtn.classList.remove("setting-select");
});