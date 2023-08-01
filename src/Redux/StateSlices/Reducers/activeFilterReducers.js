import { setFilter } from '../../../Repository/filterLocalRepository';

export default function updateActiveFilterReducer(state, action) {
  setFilter(action.payload);
  return action.payload;
}
