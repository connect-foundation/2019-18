import { combineReducers } from 'redux';
import login from './login';

const rootReducer = combineReducers({
  login,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
