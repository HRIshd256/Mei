document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for nav links
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Hero button click event
    document.querySelector(".hero button").addEventListener("click", function () {
        alert("Welcome to Meivazhi Saalai!");
    });

    // Highlight upcoming festivals
    function highlightUpcomingFestivals() {
        const today = new Date();
        document.querySelectorAll(".festival-date").forEach(festival => {
            const festivalDate = new Date(festival.getAttribute("data-date"));
            if (festivalDate > today) {
                festival.classList.add("highlight");
            }
        });
    }
    highlightUpcomingFestivals();

    // YouTube video modal
    document.querySelectorAll(".video-thumbnail").forEach(thumbnail => {
        thumbnail.addEventListener("click", function () {
            const videoUrl = this.getAttribute("data-video");
            document.querySelector(".video-modal iframe").src = videoUrl;
            document.querySelector(".video-modal").classList.add("active");
        });
    });

    document.querySelector(".video-modal .close").addEventListener("click", function () {
        document.querySelector(".video-modal iframe").src = "";
        document.querySelector(".video-modal").classList.remove("active");
    });
});
