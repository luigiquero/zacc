import { AnyAction } from 'redux';
import activitiesMock from '../data/activitiesMock';

const ADD_ACTIVITY = 'ADD_ACTIVITY';

export const activityActions = {
  addActivity(activity: any){
    return {type: ADD_ACTIVITY, payload: activity};
  },
};

export const initialActivityState = activitiesMock;

export default function activitiesReducer(state = initialActivityState, action: AnyAction) {
  switch (action.type) {
    case ADD_ACTIVITY:
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}
