// src/pages/SearchHistoryPage.tsx
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {clearLocalStorage} from "../../../app/localStorage.ts";
import {RootState} from "../../../app/store.ts";

const SearchHistoryPage: React.FC = () => {
	const [filter, setFilter] = useState('');
	const history = useSelector((state: RootState) => state.history.searches);
	const navigate = useNavigate();
	
	const filteredHistory = filter ? history.filter((entry: { city: string; }) => entry.city.toLowerCase().includes(filter.toLowerCase())) : history;
	
	const handleSelectCity = (city: string) => {
		console.log(city)
		navigate('/', { state: { selectedCity: city } });
	};
	
	const handleClearHistory = () => {
		clearLocalStorage();
		window.location.reload();  // Опционально: перезагрузка страницы для обновления состояния приложения
	};
	
	return (
		<div>
			
			<input
				type="text"
				value={filter}
				onChange={e => setFilter(e.target.value)}
				placeholder="Search by city name"
			/>
			<button onClick={handleClearHistory}>Clear History</button>
			<ul>
				{filteredHistory.map((entry: any, index: any) => (
					<li key={index} onClick={() => handleSelectCity(entry.city)}>
						<h4>{entry.city}</h4>
						<p>Temperature: {entry.data.current.temp_c}°C</p>
						<p>Condition: {entry.data.current.condition.text}</p>
						<p>Date: {new Date(entry.timestamp).toLocaleString()}</p>
					</li>
				))}
			</ul>
		
		
		</div>
	);
};

export default SearchHistoryPage;
