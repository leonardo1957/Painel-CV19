import axios from 'axios';

const api = axios.create({
    baseURL: 'http://report-covid.herokuapp.com/api/covid',
})

export default api;
