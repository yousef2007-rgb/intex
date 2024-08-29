// lib/axiosInstance.js
import axios from 'axios';
import https from 'https';

// Create an HTTPS agent that trusts self-signed certificates
const agent = new https.Agent({
    rejectUnauthorized: false, // Allow self-signed certificates
});

// Create a custom axios instance
const axiosInstance = axios.create({
    httpsAgent: agent,
});

export default axiosInstance;