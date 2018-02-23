import axios from 'axios';
import { APP_NAME, ROOT_URL } from '../config';

export const moduleName = 'product';
const prefix = `${APP_NAME}/${moduleName}`;

export const LOAD_PRODUCT = `${prefix}/LOAD_PRODUCT`;

const INITIAL_STATE = { imgs: [], sizes: [] };

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_PRODUCT:
      return payload;

    default:
      return state;
  }
}

export function loadCurrentProduct(id) {
  return dispatch => {
    axios.get(`${ROOT_URL}/sneakers/${id}`).then(response => {
      dispatch({
        type: LOAD_PRODUCT,
        payload: response.data,
      });
    });
  };
}
