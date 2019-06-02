import { createStore, combineReducers } from 'redux';
import userReducer from './user';
import activitiesReducer from './activities';

const rootReducer = combineReducers({
  user: userReducer,
  activities: activitiesReducer,
});

const store = createStore(rootReducer);

export type AppState = ReturnType<typeof store.getState>;

export default store;
