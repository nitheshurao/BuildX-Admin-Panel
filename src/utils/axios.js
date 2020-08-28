import axios from 'axios';

const instance = axios.create( { 
    baseURL: "http://15.207.7.54:8080/",}
    
);

export default instance;
