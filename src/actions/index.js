import axios from 'axios';
import { API_KEY } from '../const';
const ROOT_URL = `api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FEATCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;

    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
} 