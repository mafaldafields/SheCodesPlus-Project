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

//CALCULATE CURRENT LOCATION
    function currentLocation (position) { //to make sure it is working, this function isn't really doing anything useful for the project
        let currentLong = position.coords.longitude;
        let currentLat = position.coords.latitude;
    }
    navigator.geolocation.getCurrentPosition(currentLocation);

// AUTO - DISPLAY WEATHER & FORECAST FOR CURRENT LOCATION
function getCPWeather(position) { // get current position weather || auto
    let currentLong = position.coords.longitude;
    let currentLat = position.coords.latitude;
    console.log(currentLong);
    console.log(currentLat);
    let apiKey =`8648397279af896dbfe0e9040102c5d4`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${currentLat}&lon=${currentLong}&appid=${apiKey}&units=metric`;
        function displayResponse(response) {
            let currentTemp=Math.round(response.data.list[0].main.temp);
            let currentTempText=document.querySelector(".temperatureToday");
            currentTempText.innerHTML=`${currentTemp}ºC`;
             let windspeedT = document.querySelector(".windspeed");
            let windspeed = response.data.list[0].wind.speed;
            let currentTempDesc=response.data.list[0].weather[0].description;
            let currentTempDescription=currentTempDesc.charAt(0).toUpperCase()+currentTempDesc.slice(1);
            let temperatureTodayDescription=document.querySelector(".temperatureTodayDescription");
            temperatureTodayDescription.innerHTML=`${currentTempDescription}`;
            let todayIconCode=response.data.list[0].weather[0].icon;
            windspeedT.innerHTML=`Wind speed is ${windspeed}m/s`;
            let todayIconT=document.querySelector("#todayIcon");
            todayIconT.setAttribute(
                "src",
                `https://openweathermap.org/img/wn/${todayIconCode}@2x.png`
            );
           
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
                `https://openweathermap.org/img/wn/${todayIconCodeplus1}.png`
            );

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
                `https://openweathermap.org/img/wn/${todayIconCodeplus2}.png`
            );

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
                `https://openweathermap.org/img/wn/${todayIconCodeplus3}.png`
            );
        };
    axios.get(apiUrl).then(displayResponse);
}
 navigator.geolocation.getCurrentPosition(getCPWeather) 

/



//need to review under
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