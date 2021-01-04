const createForm = () => {
  const container = document.getElementById('container');
  const form = document.createElement('form');
  form.action = '/';
  form.id = 'from-city';
  container.append(form);
  return container;
}
export default createForm;