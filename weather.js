class Weather {
    constructor(city) {
        this.apiKey = '3f071776be6f7ccd417bfb1da2910859';
        this.city = city;
        // this.state=state;
    }


    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);
        const responseData = await response.json();

        return responseData;
    }

    //change location
    changeLocation(city) {
        this.city = city;
    }
}