class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feelsLike');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = weather.name + ',' +
            weather.sys.country;
        this.desc.textContent = weather.weather[0].main;
        this.string.textContent = weather.main.temp;

        //for setting icon attribute
        let iconcode = weather.weather[0].icon;
        let iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";
        this.icon.setAttribute('src', iconurl);

        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.feelsLike.textContent = `Feels Like:${weather.main.feels_like}`;
        this.wind.textContent = `Wind:${weather.wind.speed}`;

    }


}