/*DISPLAY FILTERBOX*/
const btnChooseTypeOfMoney = document.querySelector(".button-choose-type-of-money");
const typeOfMoneyBox = document.querySelector(".types-of-money-box");
const closeBoxMoney = document.querySelector(".close-box-money");

function displayMoneyBox() {
	typeOfMoneyBox.classList.remove("d-none");
	typeOfMoneyBox.classList.add("d-flex");
}

btnChooseTypeOfMoney.addEventListener("click", displayMoneyBox);
closeBoxMoney.addEventListener("click", () => {
	typeOfMoneyBox.classList.add("d-none");
	event.stopPropagation();
})
/*DISPLAY FILTERBOX*/