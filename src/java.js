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

    // today plus 1
let indexplus1 =[now.getDay()]-7+1;
function showTodayPlus1 () {
    if (indexplus1 >= 0) {
        let todayplus1 = weekDays[indexplus1];
        let todayplus1T = document.querySelector("#todayplus1");
        todayplus1T.innerHTML = `${todayplus1}`
    } else {
        let inverse1 = indexplus1+7;
        let todayplus1_inv = weekDays[inverse1];
        let todayplus1T = document.querySelector("#todayplus1");
        todayplus1T.innerHTML = `${todayplus1_inv}`
    }
}
    // today plus 2
    let indexplus2=[now.getDay()]-7+2;
    function showTodayPlus2() {
        if (indexplus2>=0) {
            let todayplus2=weekDays[indexplus2];
            let todayplus2T=document.querySelector("#todayplus2");
            todayplus2T.innerHTML=`${todayplus2}`
        } else {
            let inverse2=indexplus2+7;
            let todayplus2_inv = weekDays[inverse2];
            let todayplus2T=document.querySelector("#todayplus2");
            todayplus2T.innerHTML=`${todayplus2_inv}`
        }
    }

    //Run all functions for all weekDays
showTodayPlus1();
showTodayPlus2();

// Weather API Integration - axios has been firstly installed
let apiKey ="f2ef2a14fcdd5a099883dfccadbdb334";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&units=metric&appid=f2ef2a14fcdd5a099883dfccadbdb334`;
function displayResponse (response) {
    console.log(response.data)
};
axios.get(apiUrl).then(displayResponse);

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