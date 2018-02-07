import { combineReducers } from 'redux';
//import artworks from './artwork-reducer';
import artists from './artist-reducer';

export default combineReducers({
  artists: artists
})