import axios from 'axios';

const api = axios.create({
    baseURL: 'https://54.232.172.210:3000',
})

export default api;
