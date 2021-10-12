//init local storage
const storage = new Storage();

//get stored location data
// const storedLocation = storage.getLocationData();

//init weather object
const weather = new Weather('Karachi');

//init UI object 
const ui = new UI();

//get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather);

//change weather location
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;

    weather.changeLocation(city);

    //store in local storage
    storage.settoLocalStorage(city);

    //get and display weather
    getWeather();

    //close modal
    $('#locModal').modal('hide');

})

function getWeather() {
    weather.getWeather()
        .then(results => {
            console.log(results)
            ui.paint(results);
        })
        .catch(err => console.error(err));
}