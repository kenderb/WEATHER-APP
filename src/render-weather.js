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
    p.innerHTML = `Temp: ${this.data.temperature}`;
    p.id = 'main-temp';
    p2.innerHTML = `Fells like: ${this.data.feels_like}`;
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


  renderType() {
    const container = document.getElementById('type');
    const h2 = document.createElement('h2');
    h2.id = 'degrees';

    h2.innerHTML = this.data.type;
    h2.addEventListener('click', () => {
      if (h2.innerHTML === 'C') {
        Render.convertToF();
        h2.innerHTML = 'F';
      } else {
        Render.convertToC();
        h2.innerHTML = 'C';
      }
    });
    container.append(h2);
  }

  renderHumidity() {
    const p = document.createElement('p');
    p.innerHTML = `Humidity: ${this.data.humidity}`;
    this.content.append(p);
  }

  renderclimate() {
    const p = document.createElement('p');
    p.innerHTML = `Climate: ${this.data.climate}`;
    const image = document.createElement('img');
    image.src = `http://openweathermap.org/img/wn/${this.data.icon}@2x.png`;
    this.content.append(p);
    this.content.append(image);
  }
}
export default Render;