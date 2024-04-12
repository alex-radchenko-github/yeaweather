// src/features/favorites/favoritesSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface FavoritesState {
	cities: string[];
}

const initialState: FavoritesState = {
	cities: ['San Jose', 'Chicago']
};

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState,
	reducers: {
		addCityToFavorites(state, action: PayloadAction<string>) {
			if (!state.cities.includes(action.payload)) {
				state.cities.push(action.payload);
			}
		},
		removeCityFromFavorites(state, action: PayloadAction<string>) {
			state.cities = state.cities.filter(city => city !== action.payload);
		},
	},
});

export const { addCityToFavorites, removeCityFromFavorites } = favoritesSlice.actions;
export const selectFavorites = (state: RootState) => state.favorites.cities;
export default favoritesSlice.reducer;
