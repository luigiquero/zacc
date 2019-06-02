import { AnyAction } from 'redux';

const USER_SET_LOGGED = 'USER_SET_LOGGED';

export const userActions = {
  setLogged: (logged = true) => ({ type: USER_SET_LOGGED, payload: logged }),
};

export const initialUserState = {
  logged: true,
  name: 'Zackerzon da Silva'
};

export default function userReducer(state = initialUserState, action: AnyAction) {
  switch (action.type) {
    case USER_SET_LOGGED:
      return {
        ...state,
        logged: action.payload,
      };

    default:
      return state;
  }
}
