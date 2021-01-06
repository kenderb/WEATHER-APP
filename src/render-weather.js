import './styles/weather.scss';

class Render {
  constructor(data) {
    this.data = data;
    this.content = document.getElementById('conten');
  }

  renderTemp() {
    this.content.innerHTML = '';
    const h1 = document.createElement('h1');
    h1.className = 'city-title';
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    h1.innerHTML = this.data.city;
    p.innerHTML = `Temp: ${this.data.temperature}`;
    p.id = 'main-temp';
    p.className = 'temp-container';
    p2.innerHTML = `Fells like: ${this.data.feels_like}`;
    p2.className = 'temp-container';
    p2.id = 'feels-temp';
    this.content.append(h1);
    this.content.append(p);
    this.content.append(p2);
  }

  static fFormula(temp) {
    return `${Math.round((Number(temp) * (9 / 5)) + 32)} °`;
  }

  static cFormula(temp) {
    return `${Math.round((Number(temp) - 32) * (5 / 9))} °`;
  }

  static callTemps(formula) {
    const temp1 = document.getElementById('main-temp');
    const feels = document.getElementById('feels-temp');
    const feelsTem = feels.innerHTML.split(' ')[2];
    const mainTem = temp1.innerHTML.split(' ')[1];
    temp1.innerHTML = `Temp: ${formula(mainTem)}`;
    feels.innerHTML = `Fells like: ${formula(feelsTem)}`;
    return temp1;
  }

  static convertToF() {
    return Render.callTemps(Render.fFormula);
  }

  static convertToC() {
    return Render.callTemps(Render.cFormula);
  }

  static checkDegrees() {
    if (this.innerHTML === 'C') {
      Render.convertToF();
      this.innerHTML = 'F';
    } else {
      Render.convertToC();
      this.innerHTML = 'C';
    }
  }

  renderDegrees() {
    const container = document.getElementById('type');
    const button = document.createElement('button');
    button.id = 'degrees';
    button.className = 'degrees';

    button.innerHTML = this.data.type;
    button.addEventListener('click', Render.checkDegrees);
    container.append(button);
  }

  renderHumidity() {
    const p = document.createElement('p');
    p.innerHTML = `Humidity: ${this.data.humidity}`;
    p.className = 'temp-container';
    this.content.append(p);
  }

  renderclimate() {
    const p = document.createElement('p');
    const body = document.getElementsByTagName('body')[0];
    if (this.data.icon) {
      const iconLetter = (this.data.icon.split(''))[2];
      if (iconLetter === 'n') {
        body.className = 'bg-nigth';
      } else {
        body.className = 'bg-day';
      }
    }
    p.innerHTML = `Climate: ${this.data.climate}`;
    p.className = 'temp-container';
    const image = document.createElement('img');
    image.className = 'climate-image';
    image.src = `http://openweathermap.org/img/wn/${this.data.icon}@4x.png`;
    this.content.append(p);
    this.content.append(image);
  }
}
export default Render;