import { LOAD_DATA } from '../Actions/FetchData';

import { data } from './data';

const initialState = {
  isFetching: null,
  data: data,
  hasError: false,
  errorMessage: null
}


export default function (state = initialState, action) {

  switch(action.type){

    case LOAD_DATA:
      return data;

    default:
      return data;
  }

}