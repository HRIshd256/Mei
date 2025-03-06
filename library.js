document.addEventListener('DOMContentLoaded', () => {
    const books = [
        { 
            title: 'Aadhi Mei Udaya Poorana Vedaandham', 
            image: 'books/Aadhi_Mei_Udaya_Poorana_Vedandham.jpg', 
            pdf: 'books/Aadhi_Mei_Udaya_Poorana_Vedaandham.pdf',
            category: 'vedas'
        },
        { 
            title: 'Aandavargal Maanmiyam', 
            image: 'books/Aandavargal_Maanmiyam.jpg', 
            pdf: 'books/Aandavargal_Maanmiyam.pdf',
            category: 'spirituality'
        },
        { 
            title: 'Dhida Dheerka Dharisanam', 
            image: 'books/Dhida_Dheerka_Dharisanam.jpg', 
            pdf: 'books/Dhida_Dheerka_Dharisanam.pdf',
            category: 'philosophy'
        },
        { 
            title: 'Thirumeignana Arulamudham', 
            image: 'books/Thirumeignana_Arulamudham.jpg', 
            pdf: 'books/Thirumeignana_Arulamudham.pdf',
            category: 'spirituality'
        },
        { 
            title: 'Vaanamudham', 
            image: 'books/Vaanamudham.jpg', 
            pdf: 'books/Vaanamudham.pdf',
            category: 'philosophy'
        },
        { 
            title: 'Vanmadhi Koral', 
            image: 'books/Vanmadhi_koral.jpg', 
            pdf: 'books/Vanmadhi_koral.pdf',
            category: 'vedas'
        },
        { 
            title: 'Yema Padaradipadu Kodayidhak Koor', 
            image: 'books/Yema_Padaradipadu_KodayidhakKoor.jpg', 
            pdf: 'books/Yema_Padaradipadu_KodayidhakKoor.pdf',
            category: 'philosophy'
        },
        { 
            title: 'Yeman Padar Adipadu Thiru Mei Gnana Koral', 
            image: 'books/Yeman_Padar_Adipadu_Thiru_Mei Gnana_Koral.jpg', 
            pdf: 'books/Yeman_Padar_Adipadu_Thiru_Mei Gnana_Koral.pdf',
            category: 'vedas'
        }
    ];

    const booksContainer = document.getElementById('books-container');
    const searchInput = document.getElementById('search-books');
    const categoryFilter = document.getElementById('category-filter');
    const pdfModal = document.getElementById('pdf-modal');
    const pdfViewer = document.getElementById('pdf-viewer');
    const closeModal = document.querySelector('.close-modal');

    // Dynamically create book cards
    function renderBooks(booksToRender) {
        booksContainer.innerHTML = '';
        booksToRender.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.className = 'book-card';
            bookCard.dataset.category = book.category;
            bookCard.innerHTML = `
                <div class="book-cover">
                    <img src="${book.image}" alt="${book.title}">
                    <div class="book-overlay">
                        <h3>${book.title}</h3>
                        <button class="read-online" data-pdf="${book.pdf}">Read Online</button>
                    </div>
                </div>
            `;
            booksContainer.appendChild(bookCard);
        });
        attachPdfListeners();
    }

    // Filter books
    function filterBooks() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = categoryFilter.value;

        const filteredBooks = books.filter(book => {
            const matchesSearch = book.title.toLowerCase().includes(searchTerm);
            const matchesCategory = selectedCategory === '' || book.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });

        renderBooks(filteredBooks);
    }

    // Attach PDF modal listeners
    function attachPdfListeners() {
        const readOnlineButtons = document.querySelectorAll('.read-online');
        readOnlineButtons.forEach(button => {
            button.addEventListener('click', () => {
                const pdfPath = button.dataset.pdf;
                pdfViewer.src = pdfPath;
                pdfModal.style.display = 'block';
            });
        });
    }

    // Initial render
    renderBooks(books);

    // Event Listeners
    searchInput.addEventListener('input', filterBooks);
    categoryFilter.addEventListener('change', filterBooks);

    // Close modal
    closeModal.addEventListener('click', () => {
        pdfModal.style.display = 'none';
        pdfViewer.src = '';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        if (event.target === pdfModal) {
            pdfModal.style.display = 'none';
            pdfViewer.src = '';
        }
    });
});