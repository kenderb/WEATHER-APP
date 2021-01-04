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
  formValidation(value) {
    if (!value) {
      return false
    }
    return true;
  }
  
  sumitInfo() {
    const form = document.getElementById('from-city');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const cityInput = form.elements.city;
      formValidation(cityInput.value)
      cityInput.value = '';
    })
  }
}

export default From;