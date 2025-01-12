import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:8000', // we can move it to .env
});

export default apiClient;
