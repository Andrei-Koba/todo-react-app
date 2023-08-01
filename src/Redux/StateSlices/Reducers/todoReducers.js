import { nanoid } from 'nanoid';
import { setToDoArray } from '../../../Repository/toDoLocalRepository';

export function addItemReducer(state, action) {
  const item = {
    id: nanoid(),
    text: action.payload.text,
    isCompleted: action.payload.isCompleted,
  };
  state.push(item);
  setToDoArray(state);
}

export function removeItemReducer(state, action) {
  const newState = state.filter((item) => item.id !== action.payload);
  setToDoArray(newState);
  return newState;
}

export function changeItemStatusReducer(state, action) {
  const element = state.find((item) => item.id === action.payload);
  element.isCompleted = !element.isCompleted;
  setToDoArray(state);
}

export function clearCompletedItemsReducer(state) {
  const newState = state.filter((item) => !item.isCompleted);
  setToDoArray(newState);
  return newState;
}
