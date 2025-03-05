// Festivals from existing data
const festivals2025 = [
    { date: new Date(2025, 3, 11), name: "Piravannat Pirappu" },
    { date: new Date(2025, 5, 11), name: "Aadu Meilppu" },
    { date: new Date(2025, 5, 12), name: "Paava Mannippu" },
    { date: new Date(2025, 9, 7), name: "Pichai Aandu" },
    { date: new Date(2025, 11, 4), name: "Deepa Tiruvizha" }
];

const festivals2026 = [
    { date: new Date(2026, 0, 13), name: "Tiru Avathara" },
    { date: new Date(2026, 0, 14), name: "Kollari Pongal" },
    { date: new Date(2026, 0, 15), name: "Selva Pongal" }
];

const allFestivals = [...festivals2025, ...festivals2026];

function createCalendar(year) {
    const calendarContainer = document.getElementById('calendar');
    calendarContainer.innerHTML = ''; // Clear previous calendar

    const firstDay = new Date(year, 0, 1);
    const lastDay = new Date(year, 11, 31);

    // Adjust first day to start on first day of week
    const startDay = new Date(firstDay);
    startDay.setDate(firstDay.getDate() - firstDay.getDay());

    const endDay = new Date(lastDay);
    endDay.setDate(lastDay.getDate() + (6 - lastDay.getDay()));

    let currentDate = new Date(startDay);

    while (currentDate <= endDay) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day');

        if (currentDate.getMonth() !== firstDay.getMonth()) {
            dayElement.classList.add('other-month');
        }

        const dayNumber = document.createElement('div');
        dayNumber.classList.add('day-number');
        dayNumber.textContent = currentDate.getDate();
        dayElement.appendChild(dayNumber);

        // Check for festivals
        const dayFestivals = allFestivals.filter(fest => 
            fest.date.toDateString() === currentDate.toDateString()
        );

        if (dayFestivals.length > 0) {
            dayElement.classList.add('has-festival');
            dayFestivals.forEach(fest => {
                const festivalName = document.createElement('div');
                festivalName.classList.add('festival-name');
                festivalName.textContent = fest.name;
                dayElement.appendChild(festivalName);
            });
        }

        calendarContainer.appendChild(dayElement);
        currentDate.setDate(currentDate.getDate() + 1);
    }
}

function showUpcomingFestivals() {
    const popup = document.getElementById('festival-popup');
    const festivalList = document.getElementById('upcoming-festivals-list');
    const today = new Date();
    const nextThreeMonths = new Date(today);
    nextThreeMonths.setMonth(today.getMonth() + 3);

    const upcomingFestivals = allFestivals.filter(fest => 
        fest.date > today && fest.date <= nextThreeMonths
    ).sort((a, b) => a.date - b.date);

    if (upcomingFestivals.length > 0) {
        festivalList.innerHTML = upcomingFestivals.map(fest => 
            `<p>${fest.name} on ${fest.date.toLocaleDateString()}</p>`
        ).join('');
        popup.style.display = 'block';
    }
}

// Close popup when clicking x
document.querySelector('.close-popup').addEventListener('click', () => {
    document.getElementById('festival-popup').style.display = 'none';
});

// Initialize calendar and show popup on page load
document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    createCalendar(currentYear);
    showUpcomingFestivals();
});