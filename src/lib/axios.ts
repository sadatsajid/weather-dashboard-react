import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

interface ErrorResponse {
    message?: string;
}

export const customAxiosApi: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_WEATHER_API_BASE_URL as string,
    headers: {
        Accept: "*/*",
    },
});

customAxiosApi.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (error: AxiosError<ErrorResponse>) => {
        const message = error.response?.data?.message || error.message || "An unknown error occurred";

        console.error(`API Error: ${message}`, error);

        return Promise.reject(error);
    }
);
