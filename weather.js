const SearchBtn = document.getElementById('searchBtn');
const In = document.getElementById('in');
const Temp = document.getElementById('temp');
const Details = document.getElementById('details');
const Location = document.getElementById('location');
const Humidity = document.getElementById('humidity');
const Pressure = document.getElementById('pressure');
const Windspeed = document.getElementById('wind');
const Visibility = document.getElementById('visibility');
const Feels_like = document.getElementById('feels-like');
const Sea_level = document.getElementById('sea-level');
const Pic = document.getElementById('pic');



async function checkWeather(city){
    const apiKey = '781e741fbc8d4e08041a1d877b5d7270';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    const data = await fetch(`${url}`).then(response => response.json());
    console.log(data);

    Temp.innerHTML = `${Math.round(data.main.temp - 272.15)}`+"°C";
    Pressure.innerHTML = `${data.main.pressure}`+" hPa";
    Feels_like.innerHTML = `${Math.round(data.main.feels_like - 272.15)}`+"°C";
    Humidity.innerHTML = `${data.main.humidity}`+"%";
    Details.innerHTML = `${data.weather[0].main}`;
    Location.innerHTML = `${data.name}`;
    Windspeed.innerHTML = `${data.wind.speed}`;
    Visibility.innerHTML = `${data.visibility}`+"m";
    Sea_level.innerHTML = `${data.main.sea_level}`+" hPa";

    if (data.weather[0].main == 'Clear'){
        Pic.src = "clear.png";
    }
    else if (data.weather[0].main == 'Clouds'){
        Pic.src = "cloudy.png";
    }
    else if (data.weather[0].main == 'Rain'){
        Pic.src = "rain.png";
    }
    else if (data.weather[0].main == 'Snow'){
        Pic.src = "snow.png";
    }
    else if (data.weather[0].main == 'Drizzle'){
        Pic.src = "drizzle.png";
    }
    else if (data.weather[0].main == 'Haze'){
        Pic.src = "haze.png";
    }

}

SearchBtn.addEventListener('click', ()=>{
    checkWeather(In.value);
})
