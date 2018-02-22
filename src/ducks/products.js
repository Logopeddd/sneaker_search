import axios from 'axios';
import { APP_NAME, ROOT_URL } from '../config';

export const moduleName = 'products';
const prefix = `${APP_NAME}/${moduleName}`;

export const ADD_PRODUCTS = `${prefix}/ADD_PRODUCTS`;

const INITIAL_STATE = [];

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_PRODUCTS:
      return payload;

    default:
      return state;
  }
}

export function loadProducts(params) {
  return dispatch => {
    axios.get(`${ROOT_URL}/sneakers`, { params }).then(response => {
      dispatch({ type: ADD_PRODUCTS, payload: response.data });
    });
  };
}
