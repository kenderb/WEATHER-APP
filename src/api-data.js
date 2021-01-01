import WEATHER_APP_API_KEY from './api-personal-key';
class ApiData {
  constructor(city= 'Cartagena') {
    this.apiKey = WEATHER_APP_API_KEY;
    this.city =  city;
  }
  
  async getApiData() {
    try {
      const res = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${this.city}`, {
        "method": "GET",
        "headers": {
          "x-rapidapi-key": this.apiKey,
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }});
      const data = await res.json();
      console.log(data);
    } catch (e) {
      console.log("SOMETHING WENT WRONG!!!", e);
    }
  }
  showApiKey() {
    console.log(this.apiKey);
  }
  
}
export default ApiData;

