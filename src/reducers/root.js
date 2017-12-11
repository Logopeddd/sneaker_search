import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import filterReducer from './filter';

const rootReducer = combineReducers({
  filter: filterReducer,
  form: formReducer,
});

export default rootReducer;
