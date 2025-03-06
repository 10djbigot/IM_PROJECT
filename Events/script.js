const upcomingEvents = [
    { img: "Iloilo.jpg", text: "17th PFMCP National Convention in Iloilo City <br>April 13, 2023" },
    { img: "xmas.jpg", text: "Davao Agape Married Priests Association Christmas Celebration 2023 <br> December 10, 2024" },
];

const currentEvents = [
    { img: "18th.jpg", text: "16th PFMCP National Convention in Manila <br>March 10, 2022" },
    { img: "16th.jpg", text: "15th PFMCP National Convention in Baguio City <br>February 5, 2021" },
    { img: "15th.jpg", text: "14th PFMCP National Convention in Quezon City <br>January 8, 2020" }
];

let upcomingIndex = 0;
let currentIndex = 0;

function changeUpcomingEvent() {
    upcomingIndex = (upcomingIndex + 1) % upcomingEvents.length;
    document.getElementById("eventImage").src = upcomingEvents[upcomingIndex].img;
    document.getElementById("eventText").innerHTML = upcomingEvents[upcomingIndex].text;
}

function changeCurrentEvent() {
    currentIndex = (currentIndex + 1) % currentEvents.length;
    document.getElementById("currentEventImage").src = currentEvents[currentIndex].img;
    document.getElementById("currentEventText").innerHTML = currentEvents[currentIndex].text;
}
