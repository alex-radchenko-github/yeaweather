import React from 'react';
import SearchHistory from "../features/searchHistory/components/SearchHistory.tsx";

const HistoryPage: React.FC = () => {
	return (
		<div className="history-page">
			<h1>Search History</h1>
			<SearchHistory />
		</div>
	);
};

export default HistoryPage;
