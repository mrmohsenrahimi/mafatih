document.addEventListener('DOMContentLoaded', function () {
    window.nav = new NavTree("#nav-tree", {
        // options here
    });
});

document.addEventListener('DOMContentLoaded', function () {
    window.nav = new NavTree("#nav-tree", {
        searchable: true,
        searchPlaceholderText: 'Search Here',
    });
});

document.addEventListener('DOMContentLoaded', function () {
    window.nav = new NavTree("#nav-tree", {
        groupOpenIconClass: "fas",
        groupOpenIcon: "fa-chevron-down",
        groupCloseIconClass: "fas",
        groupCloseIcon: "fa-chevron-right",
        linkIconClass: "fas",
        linkIcon: "fa-link",
        iconWidth: "25px",
    });
});

document.addEventListener('DOMContentLoaded', function () {
    window.nav = new NavTree("#nav-tree", {
        showEmptyGroups: true,
    });
});