import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming React Router for navigation

interface CityWeather {
	city: string;
	temperature: number;
	condition: string;
}

interface FavoritesListProps {
	favorites: CityWeather[];
}

const FavoritesList: React.FC<FavoritesListProps> = ({ favorites }) => {
	const navigate = useNavigate();
	
	const handleCityClick = (city: string) => {
		navigate(`/weather/${city}`);
	};
	
	return (
		<ul>
			{favorites.map((weather, index) => (
				<li key={index} onClick={() => handleCityClick(weather.city)}>
					<strong>{weather.city}</strong>: {weather.temperature}°C, {weather.condition}
				</li>
			))}
		</ul>
	);
};

export default FavoritesList;
