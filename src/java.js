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
    //today plus 4
    let indexplus4=[now.getDay()]-7+4;
    function showTodayPlus4(){
        if (indexplus4>=0) {
            let todayplus4=weekDays[indexplus4];
            let todayplus4T=document.querySelector("#todayplus4");
            todayplus4T.innerHTML=`${todayplus4}`;
        } else {
            let inverse4=indexplus4+7;
            let todayplus4_inv=weekDays[inverse4];
            let todayplus4T=document.querySelector("#todayplus4");
            todayplus4T.innerHTML=`${todayplus4_inv}`;
        }
    }
    //today plus 5 
    let indexplus5=[now.getDay()]-7+5;
    function showTodayPlus5(){
        if (indexplus5>=0){
            let todayplus5=weekDays[indexplus5];
            let todayplus5T=document.querySelector("#todayplus5");
            todayplus5T.innerHTML=`${todayplus5}`;
        } else {
            let inverse5=indexplus5+7;
            let todayplus5_inv=weekDays[inverse5];
            let todayplus5T=document.querySelector("#todayplus5");
            todayplus5T.innerHTML=`${todayplus5_inv}`;
        }
    }

    //today plus 6
    let indexplus6=[now.getDay()]-7+6;
    function showTodayPlus6(){
        if (indexplus6>=0) {
            let todayplus6=weekDays[indexplus6];
            let todayplus6T=document.querySelector("#todayplus6");
            todayplus6T.innerHTML=`${todayplus6}`;
        } else {
            let inverse6=indexplus6+7;
            let todayplus6_inv=weekDays[inverse6];
            let todayplus6T=document.querySelector("#todayplus6");
            todayplus6T.innerHTML=`${todayplus6_inv}`;
        }
    }

    //Run all functions for all weekDays
showTodayPlus1();
showTodayPlus2();
showTodayPlus3();
showTodayPlus4();
showTodayPlus5();
showTodayPlus6();

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