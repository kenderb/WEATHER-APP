import ApiData from './api-data';
class From {
  constructor() {
    this.container = document.getElementById('container');
  }
  createForm() {
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
      const cityInput = form.elements.city;
      if (this.inputValidation(cityInput.value)) {
          const wheather = new ApiData(cityInput.value);
          wheather.getApiData().then((value)=> {
            console.log(value);
          });
        cityInput.value = '';
      }
    });
  }
}

export default From;