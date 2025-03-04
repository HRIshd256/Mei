// Load saved dates from localStorage on page load for both 2025 and 2026
document.addEventListener('DOMContentLoaded', () => {
    // Load 2025 dates
    const dateCells2025 = document.querySelectorAll('#festival-calendar-2025 td[contenteditable]');
    dateCells2025.forEach((cell, index) => {
        const savedDate = localStorage.getItem(`festival-date-2025-${index}`);
        if (savedDate) {
            cell.textContent = savedDate;
            updateDayColumn(cell);
        }
    });

    // Load 2026 dates
    const dateCells2026 = document.querySelectorAll('#festival-calendar-2026 td[contenteditable]');
    dateCells2026.forEach((cell, index) => {
        const savedDate = localStorage.getItem(`festival-date-2026-${index}`);
        if (savedDate) {
            cell.textContent = savedDate;
            updateDayColumn(cell);
        }
    });
});

// Toggle edit mode for the calendar (now supports both 2025 and 2026)
function toggleEditMode(year) {
    const dateCells = document.querySelectorAll(`#festival-calendar-${year} td[contenteditable]`);
    const editButton = document.getElementById(`edit-dates-btn-${year}`);

    // Error handling: Check if the edit button exists
    if (!editButton) {
        console.error(`Element with ID "edit-dates-btn-${year}" not found.`);
        return;
    }

    // Prompt for the pin
    const enteredPin = prompt("Please enter the pin to edit dates:");
    const correctPin = "5126";

    // Validate the pin
    if (enteredPin !== correctPin) {
        alert("Incorrect pin! You do not have permission to edit dates.");
        return; // Exit the function if the pin is incorrect
    }

    // If the pin is correct, proceed with toggling edit mode
    dateCells.forEach((cell, index) => {
        const isEditable = cell.getAttribute('contenteditable') === 'true';
        cell.setAttribute('contenteditable', !isEditable);

        // Add visual feedback for editable cells
        if (!isEditable) {
            cell.style.backgroundColor = '#fff';
            cell.style.color = '#333';
        } else {
            cell.style.backgroundColor = '';
            cell.style.color = '';

            // Save the edited date to localStorage (year-specific key)
            localStorage.setItem(`festival-date-${year}-${index}`, cell.textContent);

            // Update the corresponding "Day" column
            updateDayColumn(cell);
        }

        // Add event listener for real-time updates
        cell.addEventListener('input', () => {
            // Only allow saving if the cell is editable (i.e., pin was correct)
            if (cell.getAttribute('contenteditable') === 'true') {
                localStorage.setItem(`festival-date-${year}-${index}`, cell.textContent);
                updateDayColumn(cell);
            }
        });
    });

    // Update button text
    editButton.textContent = editButton.textContent === 'Edit Dates' ? 'Save Dates' : 'Edit Dates';
}

// Function to update the "Day" column based on the edited date
function updateDayColumn(dateCell) {
    try {
        // Ensure the dateCell is the "Date" column (3rd column, index 2)
        if (dateCell.cellIndex !== 2) {
            console.warn('updateDayColumn called on a non-date cell:', dateCell);
            return;
        }

        const dateText = dateCell.textContent.trim();
        const parsedDate = new Date(dateText);

        if (!isNaN(parsedDate)) {
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            const dayIndex = parsedDate.getDay();
            const dayCell = dateCell.parentElement.cells[3]; // "Day" column is the 4th column (index 3)
            if (dayCell) {
                dayCell.textContent = days[dayIndex];
            } else {
                console.error('Day cell not found for date:', dateText);
            }
        }
    } catch (error) {
        console.error('Error parsing date:', error);
    }
}