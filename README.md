# Weather App

A responsive weather application that allows users to search for a city and view its current weather conditions along with a 5-day forecast.

The application uses the OpenWeather API to retrieve real-time weather data and dynamically updates the interface based on the selected city and weather conditions.

## Live Demo

https://hamzamkhalil314-bit.github.io/Weather-APP/

## Features

* Search weather by city name
* Display current temperature and weather condition
* Display humidity and wind speed
* 5-day weather forecast
* Dynamic weather icons based on weather conditions
* Responsive design for desktop, tablet, and mobile devices
* Error handling for invalid city names
* Dynamic UI updates using JavaScript

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* Fetch API
* OpenWeather API
* Git & GitHub

## Project Structure

```text
Weather-App/
│
├── index.html
├── style.css
├── script.js
├── assets/
│   └── weather-icons/
└── README.md
```

## API

This project uses the OpenWeather API to retrieve weather information.

The application uses:

* Current Weather API for current weather conditions
* 5 Day / 3 Hour Forecast API for forecast data

API Provider:

[OpenWeather](https://openweathermap.org/api)

## How It Works

1. The user enters a city name in the search field.
2. JavaScript sends a request to the OpenWeather API using the Fetch API.
3. The current weather information is displayed in the interface.
4. Forecast data is processed and displayed as 5-day forecast cards.
5. Weather conditions determine which weather icon is displayed.
6. Invalid searches are handled through error handling.

## Key Concepts Practiced

This project helped me practice and strengthen the following frontend development concepts:

* REST API integration
* Fetch API
* Promises and asynchronous JavaScript
* `.then()` and `.catch()`
* JSON data handling
* DOM manipulation
* Dynamic element rendering
* Array methods
* Error handling
* Responsive web design
* CSS layouts and styling

## Installation

Clone the repository:

```bash
git clone https://github.com/your-username/weather-app.git
```

Navigate to the project directory:

```bash
cd weather-app
```

Add your OpenWeather API key to the JavaScript file according to the implementation.

Open `index.html` in your browser or use VS Code Live Server.

## Security Note

Do not expose your actual API key in a public repository.

For production applications, API keys should be stored securely using environment variables or a backend service.

## Future Improvements

* Location-based weather detection
* Temperature unit conversion
* Detailed weather information
* Sunrise and sunset data
* Favorite cities
* Search history
* Dark mode

## Author

**Hamza Khalil**

Frontend Developer | BS Software Engineering Student

GitHub: [hamzamkhalil314-bit](https://github.com/hamzamkhalil314-bit)

LinkedIn: Coming Soon

## License

This project is created for learning and portfolio purposes.
