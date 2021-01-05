import ApiData from './api-data';
import Render from './render-weather';
class Form {
  constructor() {
    this.container = document.getElementById('container');
    this.defaultCity = 'Cartagena';
  }
  renderCall(value) {
    const render = new Render(value);
    render.renderType()
    render.renderTemp();
    render.renderHumidity();
    render.renderclimate();
  }

  weatherCall(cityInput) {
    const wheather = new ApiData(cityInput.value);
    wheather.getApiData().then((value)=> {this.renderCall(value)});
  }

  createForm() {
    this.weatherCall(this.defaultCity);
    const form = document.createElement('form');
    const input = document.createElement('input');
    const button = document.createElement('button');
    form.action = '/home';
    form.id = 'from-city';
    input.type = 'text';
    input.name = 'city';
    input.placeholder = 'Type a city';
    button.innerHTML = 'Submit';
    button.type = 'submit';
    form.append(input);
    form.append(button);
    
    this.container.append(form);
    return form;
  }
  
  inputValidation(value) {
    if (!value) {
      const p = document.createElement('p');
      if(document.getElementById('blank-error')) {
        p.innerHTML =''
        p.innerHTML = "City can't be blank" 
      } else {
        p.id = 'blank-error';
        p.innerHTML = "City can't be blank"
        this.container.append(p);
      }
      return false
    }
    return true;
  }

  sumitInfo() {
    const form = document.getElementById('from-city');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const degrees = document.getElementById('degrees');
      if(degrees) degrees.remove();
      const cityInput = form.elements.city;
      if (this.inputValidation(cityInput.value)) {
        this.weatherCall(cityInput);
        cityInput.value = '';
      }
    });
  }
}

export default Form;