import axios from 'axios';
export const LOAD_DATA = 'LOAD_DATA';




export const loadData = () => {
  const data = []
  return{
    type: LOAD_DATA,
    payload: []
  }
}