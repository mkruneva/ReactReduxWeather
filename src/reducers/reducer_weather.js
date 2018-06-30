import { FETCH_WEATHER } from '../actions/index';

// the reducer handles the response from the ajax call made by the action

export default function(state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER: 
        // return state.concat([ action.payload.data ]) // same as the ES6 line bellow
        return [ action.payload.data, ...state ]
    }
    return state;
}