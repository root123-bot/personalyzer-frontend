import axios from 'axios';
import jwt_decode from "jwt-decode";
import dayjs from 'dayjs';

// const baseURL = 'http://localhost:8000'
// // here we first want to check if we have the authTokens data in browser storage
// const authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;

// // so all our requests we made by using axiosInstance have header of Authorization: Bearer.....
// const axiosInstance = axios.create({
//     baseURL,
//     headers: { Authorization: `Bearer ${authTokens.access}`}
// });


export default axiosInstance;