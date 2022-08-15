import axios from "axios";

const BASE_URL = 'http://localhost:5000/api';
const token = localStorage.getItem('persist:root');
const TOKEN = JSON.parse(JSON.parse(token).user).currUser.accessToken;

export const publicReq = axios.create({
    baseURL: BASE_URL,
});

export const userReq = axios.create({
    baseURL: BASE_URL,
    header: {
        token: TOKEN
    }
});

