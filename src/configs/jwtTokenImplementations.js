// auth.js

import { jwtDecode } from "jwt-decode";

// Store the JWT token in localStorage
export const storeToken = (token) => {
    localStorage.setItem('token', token);
};

// Retrieve the JWT token from localStorage
export const getToken = () => {
    return localStorage.getItem('token');
};

// Remove the JWT token from localStorage (logout)
export const removeToken = () => {
    localStorage.removeItem('token');
};

// Decode the JWT token to get the payload (claims)
export const decodeToken = (token) => {
    return jwtDecode(token);
};
