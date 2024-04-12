export interface Condition {
	text: string;
	icon: string;
	code: number;
}

export interface Current {
	temp_c: number;
	condition: Condition;
	wind_kph: number;
	humidity: number;
	cloud: number;
}

export interface WeatherResponse {
	location: {
		name: string;
		region: string;
		country: string;
		localtime: string;
	};
	current: Current;
}
