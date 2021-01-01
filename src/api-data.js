import API_KEY from './api-personal-key';
class ApiData {
  
  constructor(city) {
    this.apiKey = API_KEY;
    this.city =  city;
    this.headers = {
      "x-rapidapi-key": `${this.apiKey}`,
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
    }
  }
  
  async getApiData() {
    try {
        const res = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${this.city}`, this.headers);
        const data = await res.json();
        console.log(data.ticker.price);
    } catch (e) {
        console.log("SOMETHING WENT WRONG!!!", e);
    }
  }
  shoApiKey() {
    console.log(this.apiKey);
  }
  
}
export default ApiData;

