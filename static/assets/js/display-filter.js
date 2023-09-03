/*DISPLAY FILTERBOX*/
const filterIcon = document.querySelector(".filter-icon");
const filterBox = document.querySelector(".filter-box");

function displayFilter() {
    filterBox.classList.toggle("d-flex");
}

filterIcon.addEventListener("click", displayFilter);
/*DISPLAY FILTERBOX*/