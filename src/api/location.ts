import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { customAxiosApi } from "../lib/axios";
import { LocationData } from "../types/Location";

const fetchLocationData = async (query: string): Promise<LocationData[]> => {
    const { data } = await customAxiosApi.get(`geo/1.0/direct?q=${query}&limit=10&appid=${import.meta.env.VITE_APP_WEATHER_API_KEY}`);
    return data;
};

export const useFetchLocationData = (query: string): UseQueryResult<LocationData[], Error> => {
    return useQuery<LocationData[], Error>({
        queryKey: ['LocationData', query],
        queryFn: () => fetchLocationData(query),
        enabled: !!query,
    });
};
