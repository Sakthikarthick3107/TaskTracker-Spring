import axios from "axios";
// import dotenv from 'dotenv';

// dotenv.config();

// const baseURL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:9000';

const API = axios.create({
    baseURL : 'http://localhost:9000',
    headers:{
        'Content-Type' : 'application/json'
    }
});

// API.interceptors.request.use(
//     (config) => {

//       return config;
//     },
//     (error) => {
     
//       return Promise.reject(error);
//     }
//   );
  
 
//   API.interceptors.response.use(
//     (response) => {
     
//       return response;
//     },
//     (error) => {
    
//       return Promise.reject(error);
//     }
//   );
  

export default API;