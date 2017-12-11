import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import filterReducer from './filter';
import productReducer from './product';

const rootReducer = combineReducers({
  filter: filterReducer,
  form: formReducer,
  currentProduct: productReducer,
});

export default rootReducer;
