import React from 'react';

export interface WeatherData {
	city: string;
	temperature: number;
	humidity: number;
	windSpeed: number;
	description: string;
}

interface WeatherCardProps {
	weather: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
	return (
		<div className="weather-card">
			<h2>Weather in {weather.city}</h2>
			<p><strong>Temperature:</strong> {weather.temperature}°C</p>
			<p><strong>Humidity:</strong> {weather.humidity}%</p>
			<p><strong>Wind Speed:</strong> {weather.windSpeed} km/h</p>
			<p><strong>Conditions:</strong> {weather.description}</p>
		</div>
	);
};

export default WeatherCard;
