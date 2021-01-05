import WEATHER_APP_API_KEY from './api-personal-key';

class ApiData {
  constructor(city = 'Cartagena') {
    this.apiKey = WEATHER_APP_API_KEY;
    this.city = city;
  }

  static convertKtoC(temp) {
    return {
      temp: `${Math.floor(temp - 273.15)} °`,
      type: 'C',
    };
  }

  convertDatatoObj(data) {
    return {
      type: ApiData.convertKtoC(data.main.temp).type,
      city: this.city,
      temperature: ApiData.convertKtoC(data.main.temp).temp,
      feels_like: ApiData.convertKtoC(data.main.feels_like).temp,
      humidity: data.main.humidity,
      climate: data.weather[0].description,
      icon: data.weather[0].icon,
    };
  }

  async getApiData() {
    try {
      const res = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${this.city}`, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': this.apiKey,
          'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        },
        mode: 'cors',
      });
      const data = await res.json();
      return this.convertDatatoObj(data);
    } catch (e) {
      console.log("UYY there is an Error", e);
    }
  }
}
export default ApiData;
