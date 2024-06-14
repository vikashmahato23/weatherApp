# Weather App

This is a React Native weather application that allows users to search for and view weather forecasts for different cities. The app fetches weather data from an external API and displays it in a user-friendly interface.

## Features

- Search for cities to view their weather forecast
- View current weather conditions and a 7-day forecast
- Debounced search input to optimize API calls
- Persistent storage of the last searched city

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js](https://nodejs.org/) (which includes npm)
- You have installed [Expo CLI](https://docs.expo.dev/get-started/installation/)
- You have a Weather API key from [WeatherAPI](https://www.weatherapi.com/)

## Installation
1. Expo Cli install globally:

    ```sh
    npm install -g expo-cli
   ```
2. Clone the repository:

    ```sh
    git clone https://github.com/vikashmahato23/weatherApp.git
    ```
3. go to directory:

    ```sh
    cd weatherApp
    ```
4. Install the dependencies:

    ```sh
    npm install
    ```

 don't worry about api key i have already put it ther in constants file for your easy
 
## Running the App

1. Start the Expo development server:

    ```sh
    npm start
    ```

2. Use the Expo Go app on your mobile device to scan the QR code displayed in the terminal or on the web page that opens.

## Project Structure

- `api/`: Contains the API call functions to fetch weather data
- `assets/`: Contains image assets
- `components/`: Contains reusable UI components such as `Forecast`, `WeatherInfo`, `LocationList`, and `SearchBar`
- `utils/`: Contains utility functions such as `asyncStorage` for data persistence
- `screens/`: Contains screen components such as `HomeScreen`
- `theme/`: Contains theme-related configurations
- `navigation`: contains navigation stack

## Components

- **Forecast**: Displays the weather forecast for the upcoming days.
- **WeatherInfo**: Shows current weather information.
- **LocationList**: Displays a list of cities based on the search query.
- **SearchBar**: Provides a search input to search for cities.

## Usage

- **Searching for a City**: Enter the name of a city in the search bar. The search input is debounced to optimize API calls.
- **Viewing Weather Information**: Once a city is selected from the list, the current weather and a 7-day forecast are displayed.
- **Persistent City**: The last searched city is stored and will be displayed when the app is reopened.

## Technologies Used

- React Native
- Expo
- Axios
- Lodash (for debounce)
- WeatherAPI

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [WeatherAPI](https://www.weatherapi.com/) for providing the weather data API.
- The React Native and Expo communities for their valuable resources and support.
