import { SIDEBAR_ENABLED } from '../actions';

const initialState = {
  enabled: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIDEBAR_ENABLED:
      return { ...state, enabled: action.enabled };
    default:
      return state;
  }
};
