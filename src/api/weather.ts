import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { customAxiosApi } from "../lib/axios";
import { Coordinates, WeatherData } from "../types/weather";

const fetchWeatherData = async (coord: Coordinates): Promise<WeatherData> => {
    const response = await customAxiosApi.get(
        `data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&appid=${import.meta.env.VITE_APP_WEATHER_API_KEY}`
    );

    return response.data;
};

export const useFetchWeatherData = (coord: Coordinates): UseQueryResult<WeatherData, Error> => {
    return useQuery<WeatherData, Error>({
        queryKey: ['weatherData', coord],
        queryFn: () => fetchWeatherData(coord),
        enabled: !!coord,
    });
};
