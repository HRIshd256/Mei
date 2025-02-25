document.addEventListener("DOMContentLoaded", function () {
    const festivals = [
        { name: "Festival 1", date: "March 10, 2025" },
        { name: "Festival 2", date: "April 15, 2025" }
    ];

    const festivalList = document.getElementById("festival-list");
    festivals.forEach(festival => {
        let div = document.createElement("div");
        div.textContent = `${festival.name} - ${festival.date}`;
        festivalList.appendChild(div);
    });
});
