import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {RootState} from "../../../app/store.ts";
import {WeatherResponse} from "../../weather/model/weatherTypes.ts";

interface SearchHistoryEntry {
	city: string;
	data: WeatherResponse;
	timestamp: number;
}

interface HistoryState {
	searches: SearchHistoryEntry[];
}

const initialState: HistoryState = {
	searches: [],
};

const historySlice = createSlice({
	name: 'history',
	initialState,
	reducers: {
		addSearchEntry(state, action: PayloadAction<SearchHistoryEntry>) {
			state.searches.unshift(action.payload); // Добавляем в начало для удобства отображения
		},
		clearHistory(state) {
			state.searches = [];
		},
	},
});

export const { addSearchEntry, clearHistory } = historySlice.actions;
export const selectHistory = (state: RootState) => state.history.searches;
export default historySlice.reducer;
