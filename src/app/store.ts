// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from '../features/favorites/favoritesSlice';
import { weatherApi } from "../features/weather/api/weatherApiSlice";
import historyReducer from '../features/searchHistory/api/historySlice';
import { loadState, saveState } from './localStorage';

// Загружаем только состояние истории поиска
const persistedState = loadState();

// @ts-ignore
export const store = configureStore({
	reducer: {
		history: historyReducer,
		favorites: favoritesReducer,
		[weatherApi.reducerPath]: weatherApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(weatherApi.middleware),
	preloadedState: persistedState ? { history: persistedState.history } : undefined,
});

store.subscribe(() => {
	// Сохраняем только состояние истории поиска
	saveState({
		history: store.getState().history,
	});
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
