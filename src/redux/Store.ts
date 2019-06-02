import { createStore, combineReducers } from 'redux';
import userReducer from './user';

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer);

export type AppState = ReturnType<typeof store.getState>;

export default store;
