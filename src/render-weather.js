class Render {
  constructor(data) {
    this.data = data;
    this.content = document.getElementById('conten');
  }

  renderTemp() {
    try {
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
    } catch (error) {
      console.log('One more error', error);
    }
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

  renderType() {
    try {
      const container = document.getElementById('type');
      const h2 = document.createElement('h2');
      h2.id = 'degrees';

      h2.innerHTML = this.data.type;
      h2.addEventListener('click', Render.checkDegrees);
      container.append(h2);
    } catch (error) {
      console.log('There is one more error', error);
    }
  }

  renderHumidity() {
    try {
      const p = document.createElement('p');
      p.innerHTML = `Humidity: ${this.data.humidity}`;
      this.content.append(p);
    } catch (error) {
      console.log('Error', error);
    }
  }

  renderclimate() {
    try {
      const p = document.createElement('p');
      p.innerHTML = `Climate: ${this.data.climate}`;
      const image = document.createElement('img');
      image.src = `http://openweathermap.org/img/wn/${this.data.icon}@2x.png`;
      this.content.append(p);
      this.content.append(image);
    } catch (error) {
      console.log('error here', error);
    }
  }
}
export default Render;