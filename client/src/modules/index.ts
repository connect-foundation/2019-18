import { combineReducers } from 'redux';
import login from './login';
import feed from './feed';
import notification from './notification';

const rootReducer = combineReducers({
  login,
  feed,
  notification,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
