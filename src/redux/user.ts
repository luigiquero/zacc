import { Action } from 'redux';

export const initialUserState = {
  logged: false,
};

export default function userReducer(state = initialUserState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}
