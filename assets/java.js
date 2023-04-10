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

apik = "5d62714b45f7d3bbb262d2a10d939dc5";

function conversion(val){
    return (((val-273.15)*1.8)+32);
}

btn.addEventListener("click", function(){
    event.preventDefault();
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputVal.value+'&appid='+apik)
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => {
        var nameval = data['name']
        var humidityval = data['main']['humidity']
        var temperature = data['main']['temp']
        var wndspd = data['wind']['speed']
        var d = new Date();

        city.innerHTML = `<span>${nameval} ${d}<span>`;
        temp.innerHTML = `Temperature: <span>${conversion(temperature)}F</span>`;
        humidity.innerHTML = `Humidity: <span>${humidityval}%<span>`;
        wind.innerHTML = `Wind Speed: <span>${wndspd}mph<span>`;
        
    })
    .catch(err => alert("Please enter a valid city"))
})
