import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer';


const rootReducer =combineReducers({
    movieReducer, 
}); 

export default rootReducer;