let filterIcon = document.querySelector(".filter-icon");
let filterBox = document.querySelector(".filter-box");
let calendar = document.querySelector(".calendar");

function displayFilter() {
    filterBox.classList.toggle("d-flex");
    calendar.appendChild(filterBox); // اضافه کردن فیلتر باکس به عنوان فرزند تقویم
}

filterIcon.addEventListener("click", displayFilter);
