import { combineReducers } from 'redux';
import reactVideos from './videoReducer';

const rootReducer = combineReducers({
  reactVideos
});

export default rootReducer;