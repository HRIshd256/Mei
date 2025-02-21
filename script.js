// Sample Data
const books = [
    { title: "Aadhi Mei Udaya Poorana Vedandham", file: "assets/books/Aadhi Mei Udaya Poorana Vedandham.pdf" },
    { title: "Aanadavargal Maanniyam", file: "assets/books/Aandavargal Maanmiyam.pdf" },
    { title: "ARARULAMUDHAM", file: "assets/books/ARARULAMUDHAM.pdf" },
    { title: "Yema Padararipadu KodaiyidhaKoor", file: "assets/books/Yema Padaradipadu KodayidhakKoor.pdf" },
    { title: "Yeman Padar Adipad Thiru Mei Gnana Koral", file: "assets/books/Yeman Padar Adipadu Thiru Mei Gnana Koral.pdf" }
];

const mp3s = [
    { title: "Divine Song 1", file: "assets/mp3/song1.mp3" },
    { title: "Meditation Audio", file: "assets/mp3/meditation.mp3" }
];

// Load Books
function loadBooks() {
    const bookList = document.getElementById("book-list");
    if (!bookList) {
        console.error("Element with ID 'book-list' not found.");
        return;
    }
    books.forEach(book => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `
            <h3>${book.title}</h3>
            <a href="${book.file}" target="_blank" aria-label="Read ${book.title}">📖 Read Now</a>
        `;
        bookList.appendChild(div);
    });
}

// Load MP3s
function loadMp3s() {
    const mp3List = document.getElementById("mp3-list");
    if (!mp3List) {
        console.error("Element with ID 'mp3-list' not found.");
        return;
    }
    mp3s.forEach(mp3 => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `
            <h3>${mp3.title}</h3>
            <audio controls>
                <source src="${mp3.file}" type="audio/mpeg">
                Your browser does not support the audio element.
            </audio>
        `;
        mp3List.appendChild(div);
    });
}

// Setup Scroll Functionality for Books with Enhanced Animation
function setupScroll() {
    const bookList = document.getElementById("book-list");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");

    if (!bookList) {
        console.error("Element with ID 'book-list' not found.");
        return;
    }

    // Only setup arrow events if arrows exist (they’ll be hidden on mobile via CSS)
    if (leftArrow && rightArrow) {
        const scrollAmount = window.innerWidth <= 768 ? 220 : 300; // 220px for mobile, 300px for desktop
        let isScrolling = false; // Prevent overlapping animations

        function smoothScroll(direction) {
            if (isScrolling) return; // Prevent multiple clicks during animation
            isScrolling = true;

            const targetScroll = direction === "left" ? -scrollAmount : scrollAmount;
            bookList.scrollBy({
                left: targetScroll,
                behavior: "smooth"
            });

            // Reset the flag after the animation completes
            setTimeout(() => {
                isScrolling = false;
            }, 500); // Matches CSS transition duration
        }

        leftArrow.addEventListener("click", () => smoothScroll("left"));
        rightArrow.addEventListener("click", () => smoothScroll("right"));

        // Add visual feedback to arrows on click
        [leftArrow, rightArrow].forEach(arrow => {
            arrow.addEventListener("click", () => {
                arrow.classList.add("clicked");
                setTimeout(() => arrow.classList.remove("clicked"), 300); // Brief pulse effect
            });
        });
    }
}

// Hamburger Menu Toggle
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// Dropdown Toggle for Mobile
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            this.classList.toggle('active');
            e.preventDefault();
        }
    });
});

// Load Content and Setup Scroll on Page Load
window.onload = function() {
    loadBooks();
    loadMp3s();
    setupScroll();
};