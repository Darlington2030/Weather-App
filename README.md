# Weather App

A simple, stylish weather app that allows users to view real-time weather information for any city around the world. Built with HTML, CSS, and JavaScript, it provides an intuitive and engaging experience for users.

## Project Description

The AfricanStemGirl Weather App connects to the OpenWeatherMap API to fetch real-time weather data, including temperature, weather descriptions, wind speed, and more. It serves as a dynamic and responsive interface to showcase weather information in a user-friendly manner. Key technologies like jQuery, Moment.js, and Animate.css are used to enhance interactivity and visual appeal.

This app is perfect for developers looking to integrate external APIs or design a stylish, user-focused web application.

### Key Features

- **City-based Weather Search:** Users can enter any city name to retrieve live weather information.
- **Detailed Weather Information:** Displays temperature, weather description, wind speed, and current date and time.
- **Dynamic UI Enhancements:** Includes animations and icon integration for a polished look.
- **Error Handling:** Alerts users if a city is not found, providing a seamless user experience.

## Table of Contents

- [Weather App](#weather-app)
  - [Project Description](#project-description)
    - [Key Features](#key-features)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Screenshots](#screenshots)
  - [Credits](#credits)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)

## Installation

1. **Clone the Repository:**
   git clone https://github.com/Darlington2030/Weather-App.git
   cd Weather-App

2. **Open `Index.html`** in your browser to view the app. For local development:
   - Make sure you have an API key from [OpenWeatherMap](https://openweathermap.org/api).
   - Replace the `apiKey` variable in `index.js` with your own API key.

## Usage

1. Open the app in your browser.
2. Enter the name of the city you want weather information for in the input box.
3. Click the "Get Weather" button to fetch and display weather data, including temperature, wind speed, and weather conditions.

Example of app in use:

![Weather App in Netlify](https://flourishing-maamoul-438cfb.netlify.app/)

### Screenshots

![Screenshot of the weather App](3.png) 


## Credits

- Developed by Darlington **AfricanStemGirlHub**
- Special thanks to:
  - [OpenWeatherMap API](https://openweathermap.org/api) for providing weather data.
  - [Animate.css](https://animate.style/) for animations.
  - [Moment.js](https://momentjs.com/) for date formatting.

## License

This project is licensed under the MIT License. For more information, see [LICENSE](LICENSE).

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork this repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and test them thoroughly.
4. Submit a pull request detailing your changes.

## Tests

Tests for this app focus on verifying functionality of the weather data display and input validation.

1. **Input Validation Tests:** Ensure valid city names fetch data, while invalid names prompt errors.
2. **API Call Tests:** Test connection and error handling for API responses.

