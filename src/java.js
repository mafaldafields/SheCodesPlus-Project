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
function displayTime () {
    if (minutes>9) {
    time.innerHTML=`${hour}:${minutes}`;
    } else {
        time.innerHTML=`${hour}:0${minutes}`;
    }}
    displayTime();


// Weekdays in all boxes
    // today
let today = weekDays[now.getDay()];
let todayT = document.querySelector(".today");
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
    //today plus 3
    let indexplus3=[now.getDay()]-7+3;
    function showTodayPlus3 () {
        if (indexplus3>=0) {
            let todayplus3=weekDays[indexplus3];
            let todayplus3T=document.querySelector("#todayplus3");
            todayplus3T.innerHTML=`${todayplus3}`;
        } else {
            let inverse3=indexplus3+7;
            let todayplus3_inv=weekDays[inverse3];
            let todayplus3T=document.querySelector("#todayplus3");
            todayplus3T.innerHTML=`${todayplus3_inv}`;
        }
    }

    //Run all functions for all weekDays
showTodayPlus1();
showTodayPlus2();
showTodayPlus3();

//Calculate current location
    function currentLocation (position) { //to make sure it is working, this function isn't really doing anything useful for the project
        let currentLong = position.coords.longitude;
        let currentLat = position.coords.latitude;
        console.log(currentLong);
        console.log(currentLat);
    }
    navigator.geolocation.getCurrentPosition(currentLocation);


function getTodayWeather(position) {
    let currentLong = position.coords.longitude;
    let currentLat = position.coords.latitude;
    let apiKey =`8648397279af896dbfe0e9040102c5d4`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${currentLat}&lon=${currentLong}&appid=${apiKey}&units=metric`;
        function displayResponse(response) {
            let currentTemp=Math.round(response.data.list[0].main.temp);
            let currentTempText=document.querySelector(".temperatureToday");
            currentTempText.innerHTML=`It's currently ${currentTemp}ºC`;
            let currentTempDesc=response.data.list[0].weather[0].description;
            let currentTempDescription=currentTempDesc.charAt(0).toUpperCase()+currentTempDesc.slice(1);
            let temperatureTodayDescription=document.querySelector(".temperatureTodayDescription");
            temperatureTodayDescription.innerHTML=`${currentTempDescription}`;
            console.log(response.data.list[0].weather[0].icon);
            // add today icon
            let todayIconCode=response.data.list[0].weather[0].icon;
            todayIconT=document.querySelector("#todayIcon");
            todayIconT.setAttribute(
                "src",
                `https://openweathermap.org/img/wn/${todayIconCode}@2x.png`
            );
        };
    axios.get(apiUrl).then(displayResponse);
}
 navigator.geolocation.getCurrentPosition(getTodayWeather)


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

function showCurrentCityWeather(event){
    event.preventDefault();
    
}

//let lat = "Lisbon";// to change! 
//let apiUrl = `https://api.openweathermap.org/data/2.5/forecast'lat=${lat}&${lon}={lon}&units=metric&appid=f2ef2a14fcdd5a099883dfccadbdb334`;
//function displayResponse (response) {
    //console.log(response.data)
    //let temperatureToday = document.querySelector(".temperatureToday");
    //let temperatureTodayAPI=Math.round(response.data.main.temp);
    //temperatureToday.innerHTML=`${temperatureTodayAPI}ºC`;
//axios.get(apiUrl).then(displayResponse);

let currentCityButton=document.querySelector("#currentLocationButton");
currentCityButton.addEventListener("click", calculateCurrentCity);
currentCityButton.addEventListener("click", showCurrentCityWeather);