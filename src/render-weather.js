class Render {
  constructor(data) {
    this.data = data;
    this.content = document.getElementById('conten');
  }

  renderTemp() {
    this.content.innerHTML = '';
    const h1 = document.createElement('h1');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    h1.innerHTML = this.data.city;
    p.innerHTML = 'Temp: ' + this.data.temperature;
    p2.innerHTML = 'Fells like: ' + this.data.feels_like;
    this.content.append(h1);
    this.content.append(p);
    this.content.append(p2);
  }

  renderHumidity() {
    const p = document.createElement('p');
    p.innerHTML = 'Humidity: ' + this.data.humidity;
    this.content.append(p);
  }
  
  renderclimate() {
    const p = document.createElement('p');
    p.innerHTML = 'Climate: ' + this.data.climate;
    const image = document.createElement('img');
    image.src = `http://openweathermap.org/img/wn/${this.data.icon}@2x.png`;
    this.content.append(p);
    this.content.append(image);
  }

}
export default Render;