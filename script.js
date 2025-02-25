document.addEventListener('DOMContentLoaded', function() {
    // Example festivals data (replace with actual dates)
    const festivals = [
        { name: 'Festival 1', date: new Date('2023-12-25') },
        { name: 'Festival 2', date: new Date('2024-01-01') },
        // Add more festivals with their dates
    ];
    const today = new Date();
    const upcoming = festivals.filter(f => f.date > today);
    const list = document.getElementById('upcoming-festivals');
    upcoming.forEach(f => {
        const li = document.createElement('li');
        li.textContent = `${f.name} - ${f.date.toDateString()}`;
        list.appendChild(li);
    });
});