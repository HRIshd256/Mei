
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
    books.forEach(book => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `
            <h3>${book.title}</h3>
            <a href="${book.file}" target="_blank">📖 Read Now</a>
        `;
        bookList.appendChild(div);
    });
}

// Load MP3s
function loadMp3s() {
    const mp3List = document.getElementById("mp3-list");
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

document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});

document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            this.classList.toggle('active');
            e.preventDefault();
        }
    });
});

// Load Content on Page Load
window.onload = function() {
    loadBooks();
    loadMp3s();
};
