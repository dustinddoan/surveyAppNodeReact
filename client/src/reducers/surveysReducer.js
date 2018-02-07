import { FETCH_SURVEYS } from '../actions/types';

export default function(state = [], action) {
  console.log('survey action: ', action)
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload;
    default:
      return state;
  }
}