// OpenWeatherMap API URL and API Key
const url = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = 'f00c38e0279b7bc85480c3fe775d518c'; // Replace with your API key

// On document ready, fetch the weather for the default city (Pune)
$(document).ready(function() {
    //weatherfunction
    weatherFn('Pune');
});

// Function to fetch weather data for a given city (cityName) //weatherfunction
function weatherFn(cityName) {
    // Construct the API URL with the city name, API key, and metric units (for Celsius)
    const temp = `${url}?q=${cityName}&appid=${apiKey}&units=metric`;

    // Fetch weather data from the OpenWeatherMap API
    fetch(temp)
        .then((res) => {
            // Check if the response status is OK (status code 200-299)
            if (!res.ok) {
                // If not, throw an error to be caught later
                throw new Error('City not found. Please try again.');
            }
            // If response is OK, parse it as JSON
            return res.json();
        })
        .then((data) => {
            // Call the function to display the weather data on the page
            weatherShowFn(data);
        })
        .catch((error) => {
            // If any error occurs (either in fetch or in city not found), show an alert with the error message
            alert(error.message);
            // Log the error in the console for debugging
            console.error('Error fetching weather data:', error);
        });
}

// Function to display the fetched weather data on the webpage
function weatherShowFn(data) {
    // Display the city name from the API response
    $('#city-name').text(data.name);

    // Display the current date and time using the Moment.js library
    $('#date').text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    // Display the temperature in Celsius, from the 'main' section of the API response
    $('#temperature').html(`${data.main.temp}°C`);

    // Display the weather description (e.g., clear sky, rain, etc.)
    $('#description').text(data.weather[0].description);

    // Display the wind speed from the 'wind' section of the API response
    $('#wind-speed').html(`Wind Speed: ${data.wind.speed} m/s`);

    // Set the weather icon using the 'icon' code from the API response and construct the icon URL
    $('#weather-icon').attr('src', `http://openweathermap.org/img/w/${data.weather[0].icon}.png`);

    // Fade in the weather information section once data is ready
    $('#weather-info').fadeIn();
}