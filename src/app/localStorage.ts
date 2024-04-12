import { RootState } from './store';

interface StoredState {
	history: RootState['history'];
}

export const loadState = (): StoredState | undefined => {
	try {
		const serializedState = localStorage.getItem('state');
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState) as StoredState;
	} catch (err) {
		console.error("Could not load state:", err);
		return undefined;
	}
};

export const saveState = (state: StoredState) => {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('state', serializedState);
	} catch (err) {
		console.error("Could not save state:", err);
	}
};

export const clearLocalStorage = () => {
	localStorage.clear();
};


