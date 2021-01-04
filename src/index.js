import ApiData from './api-data';
import createForm from './components/form/form';
const wheather = new ApiData();
wheather.showApiKey();
wheather.getApiData();
createForm();