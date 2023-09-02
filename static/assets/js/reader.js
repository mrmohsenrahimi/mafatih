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
let defaultFontSize = parseInt(window.getComputedStyle(document.querySelector(".text-to-change-font-size")).fontSize);
let boxFontSize = document.querySelector(".text-to-change-font-size");

decreaseBtn.addEventListener("click", function () {
	defaultFontSize--;
	if (defaultFontSize <= 16) {
		defaultFontSize = 16;
	}
	console.log(defaultFontSize);
	document.getElementById("fontSize").value = defaultFontSize;
	// console.log(boxFontSize.style.fontSize);
	boxFontSize.style.fontSize = defaultFontSize + "px";
});
increaseBtn.addEventListener("click", function () {
	defaultFontSize++;
	if (defaultFontSize > 48) {
		defaultFontSize = 48;
	}
	console.log(defaultFontSize);
	document.getElementById("fontSize").value = defaultFontSize;
	boxFontSize.style.fontSize = defaultFontSize + "px";
});

document.getElementById("fontSize").value = defaultFontSize;
/*FONT SIZE BUTTONS*/