class ApiData {
  
  constructor(city) {
    this.apiKey = API_KEY;
    this.city =  city;
    this.headers ="headers": {
      "x-rapidapi-key": "79cb4dadbbmsh995b2f6bed49e17p17ce0fjsn5277305d5ee8",
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
    }
  }
  
  getApiData = async () => {
    try {
        const res = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${city}`);
        const data = await res.json();
        console.log(data.ticker.price);
    } catch (e) {
        console.log("SOMETHING WENT WRONG!!!", e);
    }
  }
}