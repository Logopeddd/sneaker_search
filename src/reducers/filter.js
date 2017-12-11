import { FILTER_DISPLAY } from '../actions';

const initialState = 'true';

export default (state = initialState, action) => {
  switch (action.type) {
    case FILTER_DISPLAY:
      return action.status;
    default:
      return state;
  }
};
