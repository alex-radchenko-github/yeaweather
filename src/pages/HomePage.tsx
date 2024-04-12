// src/pages/HomePage.tsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import CityWeatherDisplay from "../common/components/CityWeatherDisplay.tsx";
import WeatherInput from "../common/components/WeatherInput.tsx";
import FavoritesWeather from "../features/favorites/FavoritesWeather.tsx";

const HomePage: React.FC = () => {
	const location = useLocation();
	const city = location.state?.selectedCity
	
	return (
		<div>
			<WeatherInput />
				{city && <CityWeatherDisplay city={city}/>}
			<FavoritesWeather/>
		</div>
	
	);
};

export default HomePage;
