import { LOAD_ARTISTS,LIKED_ART } from '../Actions/artists-actions.js';


const artists = (state = [], action) => {

  switch(action.type){
    case LOAD_ARTISTS:
      return [...action.artists];
    case LIKED_ART:
      let index = state.findIndex((art) => {
        return art.id === action.user.id
      });
      return [ ...(state.slice(0, index)), action.user, ...(state.slice((index + 1), state.length))];
    default:
      return state
  }
}

export default artists;