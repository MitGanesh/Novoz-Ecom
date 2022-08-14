import axios from "axios";

const BASE_URL = 'http://localhost:5000/api';
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZjc3ZjRiMGRmZDNmNzVmMzljYmUyZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MDQ3NTkzMywiZXhwIjoxNjYwNzM1MTMzfQ.lBVysI2gRCt-FPPPHLc7HseGxKDOObFsAc7HQ4sEUmY';

export const publicReq = axios.create({
    baseURL: BASE_URL,
});

export const userReq = axios.create({
    baseURL: BASE_URL,
    header: {
        token: TOKEN
    }
});

