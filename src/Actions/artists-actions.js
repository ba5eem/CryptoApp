const axios = require('axios');

export const LOAD_ARTISTS = 'LOAD_ARTISTS';

const artistsURL = 'http://54.88.118.239/art';

export const loadArtists = () => {
  return function(dispatch){
    return axios.get(artistsURL)
    .then( artists => {
      dispatch({
        type: LOAD_ARTISTS,
        artists: artists.data
      });
    });
  }
}