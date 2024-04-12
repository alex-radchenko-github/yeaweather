import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addCityToFavorites, removeCityFromFavorites } from "../../features/favorites/favoritesSlice";
import {addSearchEntry} from "../../features/searchHistory/api/historySlice.ts";
import { useGetWeatherByCityQuery } from "../../features/weather/api/weatherApiSlice";

const WeatherInput: React.FC = () => {
	const [input, setInput] = useState<string>('');
	const [city, setCity] = useState<string>('');
	const dispatch = useDispatch();
	const { data, isFetching, error } = useGetWeatherByCityQuery(city, {
		skip: city === '',
	});

	// Throttle API requests
	useEffect(() => {
		const handler = setTimeout(() => {
			if (input) {
				setCity(input);
			}
		}, 1000);

		return () => {
			clearTimeout(handler);
		};
	}, [input]);

	// Save to search history when data is successfully fetched
	useEffect(() => {
		if (data && city) {
			const entry = {
				city,
				data,
				timestamp: Date.now()
			};
			dispatch(addSearchEntry(entry));
		}
	}, [data, city, dispatch]);

	const handleAddToFavorites = () => {
		dispatch(addCityToFavorites(city));
	};

	const handleRemoveFromFavorites = () => {
		dispatch(removeCityFromFavorites(city));
	};

	return (
		<div>
			<input
				type="text"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				placeholder="Enter city name"
			/>
			<button onClick={handleAddToFavorites}>Add to Favorites</button>
			<button onClick={handleRemoveFromFavorites}>Remove from Favorites</button>
			{isFetching && <p>Loading...</p>}
			{error && <p>Error fetching weather data</p>}
			{data && (
				<div>
					<h3>Weather in {data.location.name}, {data.location.region}</h3>
					<p>Local time: {data.location.localtime}</p>
					<p>Temperature: {data.current.temp_c} °C</p>
					<p>Weather condition: {data.current.condition.text}</p>
					<p>Wind: {data.current.wind_kph} kph</p>
					<p>Humidity: {data.current.humidity}%</p>
					<p>Cloud cover: {data.current.cloud}%</p>
					<img src={`https:${data.current.condition.icon}`} alt="Weather Icon" />
				</div>
			)}
		</div>
	);
};

export default WeatherInput;
