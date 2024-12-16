let interval;
let cDate;
let cDay;
let cHours;
let cMin;
let cSec;
let cMonth;
let dayLeft;
let daysPerYear;
let daysInFeb;

interval = window.setInterval(function(){

    cDate = new Date();
    cDay = cDate.getDate();
    cHours = cDate.getHours();
    cMin = cDate.getMinutes();
    cSec = cDate.getSeconds();
    cMonth = cDate.getMonth() +1;
    cYear = cDate.getFullYear();

    document.querySelector("#yhead").innerHTML = "New Year "+(cYear+1);
    if (cYear % 4 == 0) {
        daysPerYear = 366;
        daysInFeb = 29;
    }

    else{
        daysPerYear = 365;
        daysInFeb = 28;
    }

    switch (cMonth) {

        case 1:
            dayLeft =  daysPerYear;
            break;

        case 2:
            dayLeft = daysPerYear-31;
            break;

        case 3:
            dayLeft = daysPerYear - (31+daysInFeb)
            break;

        case 4:
            dayLeft = daysPerYear - (62+daysInFeb)
            break;
                
        case 5:
            dayLeft = daysPerYear - (92+daysInFeb)
            break;

        case 6:
            dayLeft = daysPerYear - (123+daysInFeb)
            break;

        case 7:
            dayLeft = daysPerYear - (153+daysInFeb)
            break;

        case 8:
            dayLeft = daysPerYear - (184+daysInFeb)
            break;

        case 9:
            dayLeft = daysPerYear - (215+daysInFeb)
            break;

        case 10:
            dayLeft = daysPerYear - (245+daysInFeb)
            break;

        case 11:
            dayLeft = daysPerYear - (276+daysInFeb)
            break;

        case 12:
            dayLeft = daysPerYear - (306+daysInFeb)
            break;
     
    }

    document.getElementById("seconds").innerHTML = 60-cSec;
    document.getElementById("minutes").innerHTML = 60-cMin;
    document.getElementById("hours").innerHTML = 24-cHours;
    document.getElementById("days").innerHTML = dayLeft-cDay;

    switch (cMonth) {

        case 1:

     
    }




},1000)