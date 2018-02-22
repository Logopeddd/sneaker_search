import { APP_NAME } from '../config';

export const moduleName = 'products';
const prefix = `${APP_NAME}/${moduleName}`;

export const FILTER_CHANGE_VISIBILITY = `${prefix}/FILTER_CHANGE_VISIBILITY`;

const INITIAL_STATE = true;

export default function reducer(state = INITIAL_STATE, action) {
  const { type, payload } = action;

  switch (type) {
    case FILTER_CHANGE_VISIBILITY:
      return payload;
    default:
      return state;
  }
}

export function showFilter(status) {
  return {
    type: FILTER_CHANGE_VISIBILITY,
    payload: status,
  };
}
