/*FOOTER BUTTONS*/
const settingBtn = document.querySelector(".setting-btn");
const header = document.querySelector(".navbar");
const speedBtn = document.querySelector(".speed-btn");
const singerBtn = document.querySelector(".singer-btn");
const offcanvasBottomSetting = document.querySelector(".offcanvas-setting");
const offcanvasBottomSpeed = document.querySelector(".offcanvas-speed");
const offcanvasBottomSinger = document.querySelector(".offcanvas-singer");

settingBtn.addEventListener("click", function () {
	settingBtn.classList.toggle("footer-buttons-select");
	speedBtn.classList.remove("footer-buttons-select");
	singerBtn.classList.remove("footer-buttons-select");
	offcanvasBottomSetting.classList.toggle("show");
	if (offcanvasBottomSetting.classList.contains("show")) {
		header.classList.add("z-1000");
	} else if (!offcanvasBottomSetting.classList.contains("show")) {
		header.classList.remove("z-1000");
	}
});

speedBtn.addEventListener("click", function () {
	speedBtn.classList.toggle("footer-buttons-select");
	settingBtn.classList.remove("footer-buttons-select");
	singerBtn.classList.remove("footer-buttons-select");
	offcanvasBottomSpeed.classList.toggle("show");
	if (offcanvasBottomSpeed.classList.contains("show")) {
		header.classList.add("z-1000");
	} else if (!offcanvasBottomSpeed.classList.contains("show")) {
		header.classList.remove("z-1000");
	}
});

singerBtn.addEventListener("click", function () {
	singerBtn.classList.toggle("footer-buttons-select");
	settingBtn.classList.remove("footer-buttons-select");
	speedBtn.classList.remove("footer-buttons-select");
	offcanvasBottomSinger.classList.toggle("show");
	if (offcanvasBottomSinger.classList.contains("show")) {
		header.classList.add("z-1000");
	} else if (!offcanvasBottomSinger.classList.contains("show")) {
		header.classList.remove("z-1000");
	}
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

/* SINGER SELECTION */
const singers = document.querySelectorAll(".singer-box");

function toggleActiveSinger(item) {
	singers.forEach(item => {
		item.classList.remove("singer-box-active");
	});
	item.classList.add("singer-box-active");
}

singers.forEach(function (item) {
	item.addEventListener("click", function (e) {
		toggleActiveSinger(e.target.closest(".singer-box"));
	});
});
/* SINGER SELECTION */