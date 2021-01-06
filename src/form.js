import ApiData from './api-data';
import Render from './render-weather';
import './styles/form.scss';

class Form {
  constructor() {
    this.container = document.getElementById('container');
    this.errors = document.getElementById('errors');
    this.defaultCity = 'Cartagena';
  }

  static renderCall(value) {
    const render = new Render(value);
    render.renderDegrees();
    render.renderTemp();
    render.renderHumidity();
    render.renderclimate();
  }

  static weatherCall(cityInput) {
    const wheather = new ApiData(cityInput.value);
    // Form.renderCall({
    //   city: 'Cartagena',
    //   climate: 'few clouds',
    //   feels_like: '30 °',
    //   humidity: 70,
    //   icon: '02d',
    //   temperature: '29 °',
    //   type: 'C',
    // });
    wheather.getApiData().then((value) => { Form.renderCall(value); });
  }

  createForm() {
    Form.weatherCall(this.defaultCity);
    const form = document.createElement('form');
    const input = document.createElement('input');
    const button = document.createElement('button');
    this.container.className = 'form-container';
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
      this.errors.innerHTML = '';
      this.errors.className = 'd-none';
      const p = document.createElement('p');
      if (document.getElementById('blank-error')) {
        p.innerHTML = "City can't be blank";
        this.errors.append(p);
      } else {
        this.errors.className = 'form-error';
        p.id = 'blank-error';
        p.innerHTML = "City can't be blank";
        this.errors.append(p);
      }
      return false;
    }
    return true;
  }

  sumitInfo() {
    const form = document.getElementById('from-city');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const cityInput = form.elements.city;
      if (cityInput.value) {
        this.errors.innerHTML = '';
        this.errors.className = 'd-none';
        const degrees = document.getElementById('degrees');
        if (degrees) degrees.remove();
      }
      if (this.inputValidation(cityInput.value)) {
        Form.weatherCall(cityInput);
        cityInput.value = '';
      }
    });
  }
}

export default Form;