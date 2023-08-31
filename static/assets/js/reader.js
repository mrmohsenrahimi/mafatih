/*SETTING BUTTON*/
const settingBtn = document.querySelector(".setting-btn");
const header = document.querySelector(".navbar");

settingBtn.addEventListener("click", function () {
	settingBtn.classList.toggle("setting-select");
	header.classList.toggle("z-1000");
});
/*SETTING BUTTON*/


/*FONT SIZE BUTTONS*/
const decreaseBtn = document.querySelector(".decrease");
const increaseBtn = document.querySelector(".increase");
let defaultFontSize = parseFloat(window.getComputedStyle(document.querySelector(".text-to-change-font-size")).fontSize);
const boxFontSize = document.querySelector(".text-to-change-font-size");
console.log(defaultFontSize);

decreaseBtn.addEventListener("click", function () {
	defaultFontSize--;
	if (defaultFontSize <= 16) {
		defaultFontSize = 16;
	}
	boxFontSize.style.fontSize = defaultFontSize;
});
increaseBtn.addEventListener("click", function () {
	defaultFontSize++;
	if (defaultFontSize > 48) {
		defaultFontSize = 48;
	}
	boxFontSize.style.fontSize = defaultFontSize;
});

document.getElementById("fontSize").value = defaultFontSize;
/*FONT SIZE BUTTONS*/