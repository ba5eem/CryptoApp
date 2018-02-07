const axios = require('axios');

export const LOAD_ARTISTS = 'LOAD_ARTISTS';
export const LIKED_ART = 'LIKED_ART';

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

export const likedArt = (elem) => {
  let id = parseInt(elem);
  return function(dispatch){
    return axios.put(`${artistsURL}/${id}`)
    .then(() => {
      return axios.get(`${artistsURL}/${id}`)
      .then( artist => {
        dispatch({
          type: LIKED_ART,
          user: artist.data
        });
      });
    });
  }
}