import { combineReducers } from 'redux';

import SidebarReducer from './sidebar';

const rootReducer = combineReducers({
  sidebar: SidebarReducer,
});

export default rootReducer;
