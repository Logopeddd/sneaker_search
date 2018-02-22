import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import productsReducer from '../ducks/products';
import filterReducer from '../ducks/filter';
import productReducer from '../ducks/product';

const rootReducer = combineReducers({
  products: productsReducer,
  product: productReducer,
  filter: filterReducer,
  form: formReducer,
});

export default rootReducer;
