import { LOAD_ARTISTS } from '../Actions/artists-actions.js';


const artists = (state = [], action) => {

  switch(action.type){
    case LOAD_ARTISTS:
      return [...action.artists];
    default:
      return state
  }
}

export default artists;