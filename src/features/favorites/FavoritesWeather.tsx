// src/features/weather/FavoritesWeather.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavorites } from './favoritesSlice.ts';
import {useGetWeatherByCityQuery} from "../weather/api/weatherApiSlice.ts";

const FavoritesWeather: React.FC = () => {
	const favorites = useSelector(selectFavorites);
	return (
		<div>
			<h3>Favorites</h3>
			{favorites.map((city:any) => (
				<WeatherDisplay key={city} city={city} />
			))}
		</div>
	);
};

const WeatherDisplay: React.FC<{ city: string }> = ({ city }) => {
	const { data, isFetching, error } = useGetWeatherByCityQuery(city);
	
	if (isFetching) return <p>Loading weather for {city}...</p>;
	if (error) return <p>Error fetching weather for {city}</p>;
	if (!data) return null;
	
	return (
		<div>
			<h4>Weather in {data.location.name}, {data.location.region}</h4>
			<p>Local time: {data.location.localtime}</p>
			<p>Temperature: {data.current.temp_c} °C</p>
			<p>Weather condition: {data.current.condition.text}</p>
			<p>Wind: {data.current.wind_kph} kph</p>
			<p>Humidity: {data.current.humidity}%</p>
			<p>Cloud cover: {data.current.cloud}%</p>
			<img src={`https:${data.current.condition.icon}`} alt="Weather Icon" />
		</div>
	);
};

export default FavoritesWeather;
