import axios from "axios";

const BASE_USER_URL = process.env.REACT_APP_BASE_USER_AUTHENTICATION_URL;

export const getUserInformation = () => {
    return axios.post('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'}
    });
};