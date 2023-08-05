import axios from "axios";
import chalk from "chalk";

const API_KEY = "71c111f0fbcfe5ae7d567474d76d21d3";

function displayWeather(city, weatherData) {
  console.log(chalk.yellow(`\nInformación del clima: ${city}:`));
  console.log(
    chalk.yellow(
      "☀️🌙❄️🌡️💧🌈🌪️🌧️☀️🌙❄️🌡️💧🌈🌪️🌧️☀️🌙❄️🌡️💧🌈🌪️🌧️☀️🌙❄️🌡️💧🌈🌪️🌧️"
    )
  );
  console.log(chalk.cyan("Descripción:"), weatherData.weather[0].description);
  console.log(chalk.cyan("Temperatura:"), `${weatherData.main.temp} °C`);
  console.log(chalk.cyan("Humedad:"), `${weatherData.main.humidity}%`);
  console.log(
    chalk.cyan("Velocidad del Viento:"),
    `${weatherData.wind.speed} m/s`
  );
  console.log(
    chalk.yellow("☀️🌙❄️🌡️💧🌈🌪️🌧️☀️🌙❄️🌡️💧🌈🌪️🌧️☀️🌙❄️🌡️💧🌈🌪️🌧️\n")
  );
}

function handleError(err) {
  console.log(chalk.red("Error: "), err.message);
  process.exit(1);
}

async function getWeather(city) {
  try {
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

    const response = await axios.get(endpoint, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });

    //console.log(response);
    return response.data;
  } catch (err) {
    console.log(chalk.red(err));
    throw new Error(
      `No es posible obtener la información de la ciudad: ${city}`
    );
  }
}

function initApp() {
  let city = process.argv[2];
  //console.log(city);

  if (!city) {
    console.log(
      chalk.red("Por favor, proporciona un nombre de lugar o ciudad")
    );
    console.log(
      chalk.red("Ejecuta el siguiente comando: node app.js [nombre ciudad]")
    );
  }

  getWeather(city)
    .then((weatherData) => displayWeather(city, weatherData))
    .catch(handleError);
}

initApp();
