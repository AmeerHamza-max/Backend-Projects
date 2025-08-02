// weather.js
import https from 'https';
import chalk from 'chalk';

const city = process.argv[2];

if (!city) {
  console.log(chalk.red('Please provide a city name.'));
  process.exit(1);
}

const geoURL = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`;

https.get(geoURL, (res) => {
  let geoData = '';

  res.on('data', chunk => geoData += chunk);
  res.on('end', () => {
    const geo = JSON.parse(geoData);

    if (!geo.results || geo.results.length === 0) {
      console.log(chalk.red('City not found.'));
      return;
    }

    const { name, country, latitude, longitude } = geo.results[0];

    const weatherURL = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=precipitation_probability,precipitation&forecast_days=1&timezone=auto`;

    https.get(weatherURL, (res2) => {
      let weatherData = '';

      res2.on('data', chunk => weatherData += chunk);
      res2.on('end', () => {
        const weather = JSON.parse(weatherData);

        if (!weather.current_weather || !weather.hourly) {
          console.log(chalk.red('Weather data not available.'));
          return;
        }

        const { temperature, windspeed, weathercode, time } = weather.current_weather;
        const { precipitation_probability, precipitation, time: hourlyTime } = weather.hourly;

        // Find current hour index
        const currentIndex = hourlyTime.findIndex(t => t === time);
        const chance = precipitation_probability[currentIndex];
        const amount = precipitation[currentIndex];

        console.log(chalk.blue.bold('\nWeather Report'));
        console.log(chalk.green('City:'), `${name}, ${country}`);
        console.log(chalk.yellow('Temperature:'), `${temperature}°C`);
        console.log(chalk.cyan('Wind Speed:'), `${windspeed} km/h`);
        console.log(chalk.magenta('Weather Code:'), weathercode);

        if (
          (weathercode >= 51 && weathercode <= 67) ||
          (weathercode >= 80 && weathercode <= 82) ||
          (weathercode >= 95 && weathercode <= 99)
        ) {
          console.log(chalk.red('It is currently raining.'));
        } else {
          console.log(chalk.green('No rain at the moment.'));
        }

        console.log(chalk.blue(`Chance of rain this hour:`), `${chance}%`);
        console.log(chalk.blue(`Expected rainfall:`), `${amount} mm`);
      });
    }).on('error', err => {
      console.log(chalk.red('Weather fetch error:', err.message));
    });

  });
}).on('error', err => {
  console.log(chalk.red('Geocoding error:', err.message));
});
