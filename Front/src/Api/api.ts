import axios from 'axios';

// آدرس پایه API از محیط استفاده می‌شود
const url = process.env.REACT_APP_DOMAIN || 'http://localhost:5050';
const api = axios.create({
    baseURL: url
});


// api.interceptors.request.use(
//     (req) => {
//         console.log(document.cookie.split(';'));
//         return req;  // حتماً شیء درخواست را بازگردانید تا درخواست ادامه یابد
//     },
//     (error) => {
//         return Promise.reject(error); // مدیریت خطاها در درخواست
//     }
// );

export default api;
