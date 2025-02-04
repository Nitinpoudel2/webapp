import axios from 'axios';
import { AuthResponse } from '../model/AuthResponse';


// returns the promise but not the direct values 
// promise to the value return 
const apiClient = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:5173'
    }
})
apiClient.interceptors.request.use(
    config => {
        // Exclude auth endpoints
        const publicEndpoints = ['/login', '/register'];
        const isPublicEndpoint = publicEndpoints.some(endpoint => 
            config.url?.includes(endpoint)
        );

        if (!isPublicEndpoint) {
            try {
                const authData = localStorage.getItem("user");
                if (authData) {
                    const { token } = JSON.parse(authData) as AuthResponse;
                    if (token) {
                        config.headers.Authorization = `Bearer ${token}`;
                    }
                }
            } catch (error) {
                console.error('Error setting auth header:', error);
            }
        }
        return config;
    },
    error => Promise.reject(error)
);

// Add a response interceptor to handle errors
apiClient.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401) {
            // Handle unauthorized access
            localStorage.removeItem('user');
            // Redirect to login if needed
        }
        return Promise.reject(error);
    }
);



export default apiClient;
