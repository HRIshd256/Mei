function toggleMenu() {
    let menu = document.getElementById("dropdown-menu");
    menu.classList.toggle("open");  // Adds or removes the "open" class
}

// Close menu when clicking outside
document.addEventListener("click", function (event) {
    let menu = document.getElementById("dropdown-menu");
    let menuIcon = document.querySelector(".menu-icon");

    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove("open"); // Close the menu if clicked outside
    }
});