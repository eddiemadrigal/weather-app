const city = document.getElementById('urCity');
const state = document.getElementById('urState');
const country = document.getElementById('urCountry');
const button = document.getElementById('submit');
const status = document.getElementById('status');
let h1Color = document.getElementById('h1color');
let pColor = document.getElementById('pcolor');
let myLocation = document.getElementById('myLocation');
let myTemp = document.getElementById('myTemp');
let myDataBlock = document.getElementById('myDataBlock');
let myIcon = document.getElementById('myIcon');
let myDescription = document.getElementById('myDescription');
let myDate = document.getElementById('myDate');
let hour = 12;
let ampm = "am";
let descString = "";

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        status.innerHTML = 'Geolocation is not supported by this browser.';
    }
}

function showPosition(position) { // default onload
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&lat=${lat}&lon=${lon}&appid=48b2db95f7ca34199398b4bea1ae86e4`)
    .then(res => res.json())
    .then(data => {
        myDataBlock.style.display = "flex";

        if ( state.value === '' ) {
            myLocation.innerHTML = data.name;
        } else {
            myLocation.innerHTML = data.name + ", " + (state.value).toUpperCase();
        }

        myTemp.innerHTML = data.main.temp.toFixed(0);        
        let today = new Date();
        if ( today.getHours() > 12 ) {
            hour = today.getHours() - 12;
            ampm = "pm";
        } else {
            hour = today.getHours();
        }
        let date = today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear() + " " + hour + ":" + today.getMinutes()+ampm;
        myDate.innerHTML = date;
        switch(data.weather[0].icon) {
            case "01d":
                myIcon.src = './images/01d.png';
                document.body.style.backgroundImage = "url('./images/01dBG.jpeg')";
                break;
            case "01n":
                h1Color.style.color = '#fff';
                pColor.style.color = '#fff';
                myIcon.src = './images/01n.jpeg';
                document.body.style.backgroundImage = "url('./images/01n.jpeg')";
                break;
            case "02d":
                myIcon.src = './images/02d.png';
                document.body.style.backgroundImage = "url('./images/02dBG.jpeg')";
                break;
            case "02n":
                h1Color.style.color = '#fff';
                pColor.style.color = '#fff';
                myIcon.src = './images/02n.jpeg';
                document.body.style.backgroundImage = "url('./images/02n.jpeg')";
                break;
            case "03d":
                myIcon.src = './images/03d.png';
                document.body.style.backgroundImage = "url('./images/03dBG.jpeg')";
                break;
            case "03n":
                h1Color.style.color = '#fff';
                pColor.style.color = '#fff';
                myIcon.src = './images/03n.jpeg';
                document.body.style.backgroundImage = "url('./images/03n.jpeg";
                break;
            case "04d":
                h1Color.style.color = '#fff';
                pColor.style.color = '#fff';
                myIcon.src = './images/04d.png';
                document.body.style.backgroundImage = "url('./images/04dBG.jpeg')";
                break;
            case "04n":
                h1Color.style.color = '#fff';
                pColor.style.color = '#fff';
                myIcon.src = './images/04n.jpeg';
                document.body.style.backgroundImage = "url('./images/04n.jpeg";
                break;
            case "09d":
                myIcon.src = './images/09d.png';
                document.body.style.backgroundImage = "url('./images/09dBG.jpeg')";
                break;
            case "10d":
                h1Color.style.color = '#fff';
                pColor.style.color = '#fff';
                myIcon.src = './images/10d.png';
                document.body.style.backgroundImage = "url('./images/10dBG.jpeg')";
                break;
            case "10n":
                h1Color.style.color = '#fff';
                pColor.style.color = '#fff';
                myIcon.src = './images/03nBG.jpeg';
                document.body.style.backgroundImage = "url('./images/03nBG.jpeg";
                break;
            case "11d":
                h1Color.style.color = '#fff';
                pColor.style.color = '#fff';
                myIcon.src = './images/11d.png';
                document.body.style.backgroundImage = "url('./images/11dBG.jpeg')";
                break;
            case "13d":
                myIcon.src = './images/13d.png';
                document.body.style.backgroundImage = "url('./images/13dBG.jpeg')";
                break;
            case "50d":
                myIcon.src = './images/50d.png';
                document.body.style.backgroundImage = "url('./images/50dBG.jpg')";
                break;
        }
        descString = data.weather[0].description;
        myDescription.innerHTML = descString[0].toUpperCase() + descString.slice(1);
        console.log(data)
    })
    .catch(err => console.log(err))
}

function getWeatherData() { // submit button
    let location = '';
    if (state.value === '') {
        location = city.value + "," + country.value;  
    } else {
        location = city.value + "," + state.value + "," + country.value;
    }
    // location = location.replace(/ +/g, "");
    fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${location.toLowerCase()}&appid=48b2db95f7ca34199398b4bea1ae86e4`)
    .then(res => res.json())
    .then(data => {
        myDataBlock.style.display = "flex";
        if (state.value === '') {
            let countryStr = country.value;            
            myLocation.innerHTML = data.name + ", " + countryStr[0].toUpperCase() + countryStr.slice(1);
        } else {
            myLocation.innerHTML = data.name + ", " + (state.value).toUpperCase();
        }
        
        myTemp.innerHTML = data.main.temp.toFixed(0);        
        let today = new Date();
        if ( today.getHours() > 12 ) {
            hour = today.getHours() - 12;
            ampm = "pm";
        } else {
            hour = today.getHours();
        }
        let date = today.getMonth() + "/" + today.getDate() + "/" + today.getFullYear() + " " + hour + ":" + today.getMinutes()+ampm;
        myDate.innerHTML = date;
        switch(data.weather[0].icon) {
            case "01d":
                myIcon.src = './images/01d.png';
                document.body.style.backgroundImage = "url('./images/01dBG.jpeg')";
                break;
            case "01n":
                h1Color.style.color = '#fff';
                pColor.style.color = '#fff';
                myIcon.src = './images/01n.jpeg';
                document.body.style.backgroundImage = "url('./images/01n.jpeg')";
                break;
            case "02d":
                myIcon.src = './images/02d.png';
                document.body.style.backgroundImage = "url('./images/02dBG.jpeg')";
                break;
            case "02n":
                h1Color.style.color = '#fff';
                pColor.style.color = '#fff';
                myIcon.src = './images/02n.jpeg';
                document.body.style.backgroundImage = "url('./images/02n.jpeg')";
                break;
            case "03d":
                myIcon.src = './images/03d.png';
                document.body.style.backgroundImage = "url('./images/03dBG.jpeg')";
                break;
            case "03n":
                h1Color.style.color = '#fff';
                pColor.style.color = '#fff';
                myIcon.src = './images/03n.jpeg';
                document.body.style.backgroundImage = "url('./images/03n.jpeg";
                break;
            case "04d":
                h1Color.style.color = '#fff';
                pColor.style.color = '#fff';
                myIcon.src = './images/04d.png';
                document.body.style.backgroundImage = "url('./images/04dBG.jpeg')";
                break;
            case "04n":
                h1Color.style.color = '#fff';
                pColor.style.color = '#fff';
                myIcon.src = './images/04n.jpeg';
                document.body.style.backgroundImage = "url('./images/04n.jpeg";
                break;
            case "09d":
                myIcon.src = './images/09d.png';
                document.body.style.backgroundImage = "url('./images/09dBG.jpeg')";
                break;
            case "10d":
                h1Color.style.color = '#fff';
                pColor.style.color = '#fff';
                myIcon.src = './images/10d.png';
                document.body.style.backgroundImage = "url('./images/10dBG.jpeg')";
                break;
            case "10n":
                h1Color.style.color = '#fff';
                pColor.style.color = '#fff';
                myIcon.src = './images/03nBG.jpeg';
                document.body.style.backgroundImage = "url('./images/03nBG.jpeg";
                break;
            case "11d":
                h1Color.style.color = '#fff';
                pColor.style.color = '#fff';
                myIcon.src = './images/11d.png';
                document.body.style.backgroundImage = "url('./images/11dBG.jpeg')";
                break;
            case "13d":
                myIcon.src = './images/13d.png';
                document.body.style.backgroundImage = "url('./images/13dBG.jpeg')";
                break;
            case "50d":
                myIcon.src = './images/50d.png';
                document.body.style.backgroundImage = "url('./images/50dBG.jpg')";
                break;
        }
        descString = data.weather[0].description;
        myDescription.innerHTML = descString[0].toUpperCase() + descString.slice(1);
        console.log(data)
    })
    .catch(err => {
        console.log(err);
        getLocation();
        alert("An error occurred.  Please check the spelling of city, state or country.");
    })
}
