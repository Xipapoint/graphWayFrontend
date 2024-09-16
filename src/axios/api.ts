import axios from "axios";
import { BadInternetConnection } from "../error/Errors/4__Error/BadInternetConnection";

interface AuthResponse {
    accessToken: string;
    refreshToken: string;
    userId: string;
}

const setupApiClient = (authUrl: string, baseUrl: string) => {
    const $api = axios.create({
        withCredentials: true,
        baseURL: baseUrl,
        timeout: 5000,
    });

    $api.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
        return config;
    });

    $api.interceptors.response.use((config) => {
        return config;
    }, async (error) => {
        const originalRequest = error.config;
        if (error.response && error.response.status === 401 && !originalRequest._isRetry) {
            originalRequest._isRetry = true;
            try {
                const response = await axios.get<AuthResponse>(`${authUrl}/refresh`, { withCredentials: true });
                localStorage.setItem('token', response.data.accessToken);
                localStorage.setItem('userId', response.data.userId);
                localStorage.setItem('auth', 'true');
                return $api.request(originalRequest);
            } catch (e) {
                localStorage.setItem('userId', '');
                localStorage.setItem('auth', 'false');
                console.log('НЕ АВТОРИЗОВАН');
                console.log(e);
                
            }
        } else if (!error.response) {
            throw new BadInternetConnection("Server currently is not working. Try again later");
        }
        throw error;
    });

    return $api;
};

export const authHttp = setupApiClient('http://localhost:5000/api/auth', 'http://localhost:5000/api/auth')