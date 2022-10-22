// GET CURRENT DATE & TIME AND SHOW IT
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

// DISPLAY WEEKDAYS
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
    }}
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
        }}
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
        }}
    //Run all functions for all weekDays
    showTodayPlus1();
    showTodayPlus2();
    showTodayPlus3();

// AUTO - DISPLAY WEATHER & FORECAST FOR CURRENT LOCATION
function displayResponse(response) {
    let currentTemp=Math.round(response.data.list[0].main.temp);
    let currentTempText=document.querySelector(".temperatureToday");
    currentTempText.innerHTML=`${currentTemp}ºC`;
     let windspeedT = document.querySelector(".windspeed");
    let windspeed = response.data.list[0].wind.speed;
     windspeedT.innerHTML=`Wind speed is ${windspeed}m/s`;
     let currentTempDesc=response.data.list[0].weather[0].description;
    let currentTempDescription=currentTempDesc.charAt(0).toUpperCase()+currentTempDesc.slice(1);
    let temperatureTodayDescription=document.querySelector(".temperatureTodayDescription");
    temperatureTodayDescription.innerHTML=`${currentTempDescription}`;
    let todayIconCode=response.data.list[0].weather[0].icon;
    let todayIconT=document.querySelector("#todayIcon");
    todayIconT.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${todayIconCode}@2x.png`);
    //todayplus1
    let tempTodayplus1 = Math.round(response.data.list[8].main.temp);
    let tempTodayplus1T = document.querySelector (".temperatureTodayplus1");
    tempTodayplus1T.innerHTML=`${tempTodayplus1}ºC`;
    let windspeedTplus1 = document.querySelector(".windspeedtodayplus1");
    let windspeedplus1 = response.data.list[8].wind.speed;
    windspeedTplus1.innerHTML=`Wind speed will be ${windspeedplus1}m/s`
    let currentTempDescplus1=(response.data.list[8].weather[0].description);
    let currentTempDescriptionplus1=currentTempDescplus1.charAt(0).toUpperCase()+currentTempDescplus1.slice(1);
    let temperatureTodayDescriptionplus1=document.querySelector(".temperatureTodayDescriptionplus1");
    temperatureTodayDescriptionplus1.innerHTML=`${currentTempDescriptionplus1}`;
    let todayIconCodeplus1=response.data.list[8].weather[0].icon;
    let todayIconTplus1=document.querySelector("#todayIconplus1");
    todayIconTplus1.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${todayIconCodeplus1}.png`);
    //todayplus2
    let tempTodayplus2 = Math.round(response.data.list[16].main.temp);
    let tempTodayplus2T = document.querySelector (".temperatureTodayplus2");
    tempTodayplus2T.innerHTML=`${tempTodayplus2}ºC`;
    let windspeedTplus2 = document.querySelector(".windspeedtodayplus2");
    let windspeedplus2 = response.data.list[16].wind.speed;
    windspeedTplus2.innerHTML=`Wind speed will be ${windspeedplus2}m/s`
    let currentTempDescplus2=(response.data.list[16].weather[0].description);
    let currentTempDescriptionplus2=currentTempDescplus2.charAt(0).toUpperCase()+currentTempDescplus2.slice(1);
    let temperatureTodayDescriptionplus2=document.querySelector(".temperatureTodayDescriptionplus2");
    temperatureTodayDescriptionplus2.innerHTML=`${currentTempDescriptionplus2}`;
    let todayIconCodeplus2=response.data.list[16].weather[0].icon;
    let todayIconTplus2=document.querySelector("#todayIconplus2");
    todayIconTplus2.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${todayIconCodeplus2}.png`);
    //todayplus3
    let tempTodayplus3 = Math.round(response.data.list[24].main.temp);
    let tempTodayplus3T = document.querySelector (".temperatureTodayplus3");
    tempTodayplus3T.innerHTML=`${tempTodayplus3}ºC`;
    let windspeedTplus3 = document.querySelector(".windspeedtodayplus3");
    let windspeedplus3 = response.data.list[24].wind.speed;
    windspeedTplus3.innerHTML=`Wind speed will be ${windspeedplus3}m/s`
    let currentTempDescplus3=(response.data.list[24].weather[0].description);
    let currentTempDescriptionplus3=currentTempDescplus3.charAt(0).toUpperCase()+currentTempDescplus3.slice(1);
    let temperatureTodayDescriptionplus3=document.querySelector(".temperatureTodayDescriptionplus3");
    temperatureTodayDescriptionplus3.innerHTML=`${currentTempDescriptionplus3}`;
    let todayIconCodeplus3=response.data.list[24].weather[0].icon;
    let todayIconTplus3=document.querySelector("#todayIconplus3");
    todayIconTplus3.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${todayIconCodeplus3}.png`);
// display what city the forecast is for
        let displayinfocity = document.querySelector("#displayinfocity");
        let cityforecasted = response.data.city.name;
        let countryforecasted = response.data.city.country;
        displayinfocity.innerHTML=`Displaying forecast for ${cityforecasted}, ${countryforecasted}`;   
        
        function changeunits () {
        // change windspeed
            let windspeedF = windspeed*=2.2369362920544025;
            let windspeedF_ = windspeedF.toFixed(2);
            windspeedT.innerHTML=`Wind speed will be ${windspeedF_} mph`;
            let windspeedplus1F = windspeedplus1*=2.2369362920544025;
            let windspeedplus1F_ = windspeedplus1F.toFixed(2);
            windspeedTplus1.innerHTML=`Wind speed will be ${windspeedplus1F_} mph`;
            let windspeedplus2F = windspeedplus2*=2.2369362920544025;
            let windspeedplus2F_ = windspeedplus2F.toFixed(2);
            windspeedTplus2.innerHTML=`Wind speed will be ${windspeedplus2F_} mph`;
            let windspeedplus3F = windspeedplus3*=2.2369362920544025;
            let windspeedplus3F_ = windspeedplus3F.toFixed(2);
            windspeedTplus3.innerHTML=`Wind speed will be ${windspeedplus3F_} mph`;
        // change temp (°C x 9/5) + 32
        let currentTemp_=currentTemp*=1.8;
        let currentTempF=Math.round(currentTemp_+32);
        let currentTempTextF=document.querySelector(".temperatureToday");
        currentTempTextF.innerHTML=`${currentTempF}ºF`;
        let tempTodayplus1_= tempTodayplus1*=1.8;
        let tempTodayplus1F=Math.round(tempTodayplus1_+32);
        let currentTempTextFplus1=document.querySelector(".temperatureTodayplus1");
        currentTempTextFplus1.innerHTML=`${tempTodayplus1F}ºF`;
        let tempTodayplus2_= tempTodayplus2*=1.8;
        let tempTodayplus2F=Math.round(tempTodayplus2_+32);
        let currentTempTextFplus2=document.querySelector(".temperatureTodayplus2");
        currentTempTextFplus2.innerHTML=`${tempTodayplus2F}ºF`;
        let tempTodayplus3_= tempTodayplus3*=1.8;
        let tempTodayplus3F=Math.round(tempTodayplus3_+32);
        let currentTempTextFplus3=document.querySelector(".temperatureTodayplus3");
        currentTempTextFplus3.innerHTML=`${tempTodayplus3F}ºF`;
        }
        let changeunitsbutton = document.querySelector("#changeunits");
        function disable () {
            changeunitsbutton.disabled=true;
        }
        changeunitsbutton.addEventListener("click", changeunits) 
        changeunitsbutton.addEventListener("click", disable)
};


function getCPWeather(position) { // get current position weather || auto
    let Long = position.coords.longitude;
    let Lat = position.coords.latitude;
    let apiKey =`8648397279af896dbfe0e9040102c5d4`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${Lat}&lon=${Long}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayResponse);
}
 navigator.geolocation.getCurrentPosition(getCPWeather); 


 // Search city and display weather
function weatherForSearched (event) {
    event.preventDefault();
    let searchedCity = document.querySelector("#search-input");
    let apiKey =`8648397279af896dbfe0e9040102c5d4`;
    let apiUrl1 = `https://api.openweathermap.org/geo/1.0/direct?q=${searchedCity.value}&appid=${apiKey}`
        function defineL (response){
            let Long = response.data[0].lon;
            let Lat = response.data[0].lat;
            let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${Lat}&lon=${Long}&appid=${apiKey}&units=metric`;
            axios.get(apiUrl).then(displayResponse);
        }
    axios.get(apiUrl1).then(defineL);
}
let searchForm = document.querySelector ("#search-bar");
function activatebutton () {
    let changeunitsbutton = document.querySelector("#changeunits");
    changeunitsbutton.disabled=false;
};
searchForm.addEventListener("submit", weatherForSearched)
searchForm.addEventListener("submit", activatebutton);

// Button for current location
function getloc() {
    navigator.geolocation.getCurrentPosition(getCPWeather); 
}
let currentLocButton = document.querySelector ("#currentLocationButton");
currentLocButton.addEventListener("click", getloc);
currentLocButton.addEventListener("click", activatebutton);
