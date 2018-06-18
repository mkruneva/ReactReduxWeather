import { API_KEY } from '../const';

export const FEATCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
    return {
        type: FETCH_WEATHER
    }
} 