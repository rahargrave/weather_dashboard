// const form = document.querySelector("form");
// const apiKey = "5d62714b45f7d3bbb262d2a10d939dc5";
// const inputVal = input.value;
// const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

var inputVal = document.querySelector("#exampleInputcity");
var btn = document.querySelector(".submit");
var city = document.querySelector("#cityOutput");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
var humidity = document.querySelector("#humidity");

apik = "3be2b2b6acc21e3760901d15acf91f72";



btn.addEventListener("click", function(){
    event.preventDefault();
    fetch('http://api.openweathermap.org/data/2.5/forecast/daily?appid='+apik+'&q='+inputVal.value+'&cnt=6&units=imperial')

    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => {
        // console.log(data.list[0].humidity);
        //gets data we need for the main div.
        var nameval = data.city.name
        var humidityval = data.list[0].humidity
        var temperature = data.list[0].temp.day
        var wndspd = data.list[0].speed
        var dt = new Date();

        // console.log(month + '/' + day + '/' + year);
        //update the html-TO DO: change to function
        
        

        city.innerHTML = `<span>${nameval} ${(dt.toLocaleDateString())}<span>`;
        temp.innerHTML = `Temperature: <span>${temperature}F</span>`;
        humidity.innerHTML = `Humidity: <span>${humidityval}%<span>`;
        wind.innerHTML = `Wind Speed: <span>${wndspd}mph<span>`;

        var humidity1 = data.list[1].humidity
        var temperature1 = data.list[1].temp.day
        var wndspd1 = data.list[1].speed

        date1.innerHTML = `<span>${(AddDays(dt, 1)).toLocaleDateString()}<span>`
        temp1.innerHTML = `Temperature: <span>${temperature1}F</span>`;
        hum1.innerHTML = `Humidity: <span>${humidity1}%<span>`;
        wind1.innerHTML = `Wind Speed: <span>${wndspd1}mph<span>`;

        var humidity2 = data.list[2].humidity
        var temperature2 = data.list[2].temp.day
        var wndspd2 = data.list[2].speed

        date2.innerHTML = `<span>${(AddDays(dt, 2)).toLocaleDateString()}<span>`
        temp2.innerHTML = `Temperature: <span>${temperature2}F</span>`;
        hum2.innerHTML = `Humidity: <span>${humidity2}%<span>`;
        wind2.innerHTML = `Wind Speed: <span>${wndspd2}mph<span>`;

        var humidity3 = data.list[3].humidity
        var temperature3 = data.list[3].temp.day
        var wndspd3 = data.list[3].speed

        date3.innerHTML = `<span>${(AddDays(dt, 3)).toLocaleDateString()}<span>`
        temp3.innerHTML = `Temperature: <span>${temperature3}F</span>`;
        hum3.innerHTML = `Humidity: <span>${humidity3}%<span>`;
        wind3.innerHTML = `Wind Speed: <span>${wndspd3}mph<span>`;

        var humidity4 = data.list[4].humidity
        var temperature4 = data.list[4].temp.day
        var wndspd4 = data.list[4].speed

        date4.innerHTML = `<span>${(AddDays(dt, 4)).toLocaleDateString()}<span>`
        temp4.innerHTML = `Temperature: <span>${temperature4}F</span>`;
        hum4.innerHTML = `Humidity: <span>${humidity4}%<span>`;
        wind4.innerHTML = `Wind Speed: <span>${wndspd4}mph<span>`;

        var humidity5 = data.list[5].humidity
        var temperature5 = data.list[5].temp.day
        var wndspd5 = data.list[5].speed

        date5.innerHTML = `<span>${(AddDays(dt, 5)).toLocaleDateString()}<span>`
        temp5.innerHTML = `Temperature: <span>${temperature5}F</span>`;
        hum5.innerHTML = `Humidity: <span>${humidity5}%<span>`;
        wind5.innerHTML = `Wind Speed: <span>${wndspd5}mph<span>`;


        //Inputs data for the 5 day forecast
        // for (let index = 1; index < data.list.length; index++) {
        //     const day = data.list[index];
        //     console.log(day);
        //     let col = document.createElement("div");
        //     col.setAttribute("class","col-2");
        //     let dateEl = document.createElement("h3");
        //     dateEl.textContent = month + '/' + day + '/' + year
        //     let forecastEl = document.querySelector(".forecast");
        //     console.log(col);
        //     col.appendChild(dateEl);
            
        //     forecastEl.appendChild(col);
        // }
        
    })
    // .catch(err => alert("Please enter a valid city"))

})

function AddDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
      return result;
  }