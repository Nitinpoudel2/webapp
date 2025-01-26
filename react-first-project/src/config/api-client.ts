import axios from 'axios';


// returns the promise but not the direct values 
// promise to the value return 
const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
});

export default apiClient;
