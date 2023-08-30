/*SETTING BUTTON*/
const settingBtn = document.querySelector(".setting-btn");
const header = document.querySelector(".navbar")

settingBtn.addEventListener("click", function () {
    settingBtn.classList.toggle("setting-select");
    header.classList.toggle("z-1000");
});
/*SETTING BUTTON*/


/*LINE HEIGHT BUTTONS*/
const decreaseBtn = document.querySelector(".decrease");
const increaseBtn = document.querySelector(".increase");
let lineHeight = document.getElementById("lineHeight");
let value = 1;
const changeLineHeight = document.querySelector(".text-to-change-line-height");

function changeLH() {
    if (value <= 1) {
        value = 1;
    }
    lineHeight.value = value;
    changeLineHeight.style.lineHeight = lineHeight.value;
    lineHeight.scrollIntoView({
            behavior: "smooth",
            block: "end",
        }
    )
}

decreaseBtn.addEventListener("click", function () {
    value--;
    changeLH();
});
increaseBtn.addEventListener("click", function () {
    value++;
    changeLH();
});

lineHeight.addEventListener("change", changeLH);

/*LINE HEIGHT BUTTONS*/