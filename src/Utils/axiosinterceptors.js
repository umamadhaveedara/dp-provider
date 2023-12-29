import axios from 'axios';
import { apiUrl } from './api';

const instance = axios.create({
  baseURL: `${apiUrl}`, 
});

instance.interceptors.request.use(
  (config) => {
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


instance.interceptors.response.use(
  (response) => {
   
    return response.data;
  },
  (error) => {
    
    return Promise.reject(error);
  }
);

export default instance;
