/*OFFCANVAS CLOSE BUTTON*/
const barsClose = document.getElementById("bars-close");

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
})
/*OFFCANVAS CLOSE BUTTON*/


/*DISPLAY FILTERBOX*/
const filterIcon = document.querySelector(".filter-icon");
const filterBox = document.querySelector(".filter-box");
const calendar = document.querySelector(".calendar");

function displayFilter() {
    filterBox.classList.toggle("d-flex");
    calendar.appendChild(filterBox); // اضافه کردن فیلتر باکس به عنوان فرزند تقویم
}

filterIcon.addEventListener("click", displayFilter);
/*DISPLAY FILTERBOX*/