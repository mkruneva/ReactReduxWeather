import axios from 'axios';
import { API_KEY } from '../const';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

// fetchWeather makes ajax call to API

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},GB`;

    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
} 