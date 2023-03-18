import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:5254',
    headers: {
        "Content-type": 'multipart/form-data',
        //"Content-type": 'application/json'
    }
})
