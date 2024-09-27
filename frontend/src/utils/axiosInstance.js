import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://event-registration-app-hxl3.onrender.com/event",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    }
});

export default axiosInstance;