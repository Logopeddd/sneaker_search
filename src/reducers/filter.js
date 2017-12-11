import { CHANGE_FILTER_VISIBILITY } from '../actions';

const initialState = 'true';

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER_VISIBILITY:
      return action.status;
    default:
      return state;
  }
};
