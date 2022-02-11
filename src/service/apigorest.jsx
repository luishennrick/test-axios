import axios from 'axios';

const api = axios.create({
    baseURL: "https://gorest.co.in/public/v1/users/" 
});



export default api;