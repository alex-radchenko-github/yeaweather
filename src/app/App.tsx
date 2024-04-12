import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HistoryPage from "../pages/HistoryPage";
import HomePage from "../pages/HomePage";
import { ROUTES } from '../routes';

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path={ROUTES.HOME} element={<HomePage />} />
				<Route path={ROUTES.HISTORY} element={<HistoryPage />} />
			</Routes>
		</Router>
	);
};

export default App;
