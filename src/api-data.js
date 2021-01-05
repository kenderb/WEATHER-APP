import WEATHER_APP_API_KEY from './api-personal-key';
import Image404 from './images/error_404.png';

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

  static showErrors() {
    const content = document.getElementById('conten');
    content.innerHTML = '';
    const type = document.getElementById('type');
    type.innerHTML = '';
    const img = document.createElement('img');
    img.src = Image404;
    content.append(img);
  }

  async getApiData() {
    try {
      const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`, {
        mode: 'cors',
      });
      const data = await res.json();
      return this.convertDatatoObj(data);
    } catch (e) {
      return setTimeout(ApiData.showErrors, 200);
    }
  }
}
export default ApiData;
