// src/features/weather/weatherApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {WeatherResponse} from "../model/weatherTypes.ts";

export const weatherApi = createApi({
	reducerPath: 'weatherApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://api.weatherapi.com/v1/' }),
	endpoints: (builder) => ({
		getWeatherByCity: builder.query<WeatherResponse, string>({
			query: (city) => `current.json?key=6f632d2ab8554296b5a40642241204&q=${city}`,
		}),
	}),
});

export const { useGetWeatherByCityQuery } = weatherApi;
