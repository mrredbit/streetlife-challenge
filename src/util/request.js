import axios from 'axios';
import config from 'config';

var request = axios.create({
    baseURL: config.apiBaseUrl
});

export default request;
