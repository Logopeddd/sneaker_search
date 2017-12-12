import { ADD_CURRENT_PRODUCT } from '../actions';

const initialState = { img: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_CURRENT_PRODUCT:
      return action.product;
    default:
      return state;
  }
};
