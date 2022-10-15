// Get current date and time & show it
let now = new Date();
let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
let weekDay = weekDays[now.getDay()];
let day = now.getDate();
let allMonths = ["January", "February", "March", "April", "May", "June", "July","August", "September", "October", "November", "December"];
let month = allMonths[now.getMonth()];
let year = now.getFullYear();
let hour = now.getHours();
let minutes = now.getMinutes();
let date = document.querySelector("#fontdate");
date.innerHTML=`${weekDay}, ${day} ${month} ${year}`;
let time = document.querySelector("#fonttime");
time.innerHTML=`${hour}:${minutes}`;

// Weekdays in all boxes
    // today
let today = weekDays[now.getDay()];
let todayT = document.querySelector("#today");
todayT.innerHTML = `${today}`;


// Weather API Integration - axios has been firstly installed
let apiKey ="f2ef2a14fcdd5a099883dfccadbdb334";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&units=metric&appid=f2ef2a14fcdd5a099883dfccadbdb334`;
function displayResponse (response) {
    console.log(response.data)
};
axios.get(apiUrl).then(displayResponse);
//Geolocation API Integration


//Calculate current location after clicking current location button
function calculateCurrentCity (event) {
    event.preventDefault();
    function getResponse(position) {
    let currentLong = position.coords.longitude;
    let currentLat = position.coords.latitude;
    console.log(currentLat);
    console.log(currentLong);
    }
    navigator.geolocation.getCurrentPosition(getResponse);
}
let currentCityButton=document.querySelector("#currentLocationButton");
currentCityButton.addEventListener("click", calculateCurrentCity);
