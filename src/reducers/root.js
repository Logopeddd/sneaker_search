import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import sidebarReducer from './sidebar';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  form: formReducer,
});

export default rootReducer;
