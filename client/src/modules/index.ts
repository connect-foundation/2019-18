import { combineReducers } from 'redux';
import login from './login';
import feed from './feed';

const rootReducer = combineReducers({
  login,
  feed,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
