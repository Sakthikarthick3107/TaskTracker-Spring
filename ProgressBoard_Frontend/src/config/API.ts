import axios from "axios";
// import { config } from "dotenv";

// config();

const API = axios.create({
    baseURL : 'http://localhost:9000',
    headers:{
        'Content-Type' : 'application/json'
    }
});

API.interceptors.request.use(
    (config) => {

      return config;
    },
    (error) => {
     
      return Promise.reject(error);
    }
  );
  
 
  API.interceptors.response.use(
    (response) => {
     
      return response;
    },
    (error) => {
    
      return Promise.reject(error);
    }
  );
  

export default API;