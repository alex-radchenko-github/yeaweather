// src/components/CityWeatherDisplay.tsx
import React from 'react';
import {useGetWeatherByCityQuery} from "../../features/weather/api/weatherApiSlice.ts";

interface CityWeatherDisplayProps {
	city: string;
}

const CityWeatherDisplay: React.FC<CityWeatherDisplayProps> = ({ city }) => {
	const { data, error, isLoading } = useGetWeatherByCityQuery(city);
	
	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error fetching weather data.</p>;
	
	return (
		<div>
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

export default CityWeatherDisplay;
