// Sample data (replace with your actual files)
const books = [
    { title: "Aadhi Mei Udaya Poorana Vedandham", file: "https://drive.google.com/uc?export=view&id=1itdk7IMuLoSMJjZkqeqUgQ0YvNoBSNSc" },
    { title: "Aanadavargal Maanniyam", file: "https://drive.google.com/uc?export=view&id=1Bo_IWHxIHzKSrRQO9IwKW7P8Mvt6893n" },
    { title: "ARARULAMUDHAM", file: "https://drive.google.com/uc?export=view&id=1qN8DPZU9jRxvuLTRMrt9dJ3RotFnPMNt" },
    { title: "Yema Padararipadu KodaiyidhaKoor", file: "https://drive.google.com/uc?export=view&id=1q8w6jOk4YEs2GjnIjcUIZuseh-1iWL7K" },
    { title: "Yeman Padar Adipad Thiru Mei Gnana Koral", file: "https://drive.google.com/uc?export=view&id=1RhM9Wg6_I8SJea-fI3pyi1fMTaIj6ers" }
];

const mp3s = [
    { title: "Divine Song 1", file: "assets/mp3/song1.mp3" },
    { title: "Meditation Audio", file: "assets/mp3/meditation.mp3" }
];

// Function to load books
function loadBooks() {
    const bookList = document.getElementById("book-list");
    books.forEach(book => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `
            <h3>${book.title}</h3>
            <a href="${book.file}" target="_blank">Read Now</a>
        `;
        bookList.appendChild(div);
    });
}

// Function to load MP3s
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

// Load content when the page loads
window.onload = function() {
    loadBooks();
    loadMp3s();
};
