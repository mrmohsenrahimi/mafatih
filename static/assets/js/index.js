let filterIcon = document.querySelector(".filter-icon");

let iconSearch = document.querySelector(".icon-search")

let inputSearch = document.querySelector(".input-search")

let filterBox = document.querySelector(".filter-box");
console.log(filterBox);
function displayFilter() {
    filterBox.classList.toggle("d-flex")
}

function backColor() {
    filterIcon.style.backgroundColor = "var(--bs-form-control-bg)"
    iconSearch.style.backgroundColor = "var(--bs-form-control-bg)"
    inputSearch.style.backgroundColor = "var(--bs-form-control-bg)"
}


filterIcon.addEventListener("click", displayFilter)
inputSearch.addEventListener("focus", backColor)