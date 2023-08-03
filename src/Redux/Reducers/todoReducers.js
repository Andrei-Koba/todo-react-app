export function addItemReducer(state, action) {
  state.push(action.payload);
}

export function removeItemReducer(state, action) {
  return state.filter((item) => item.id !== action.payload);
}

export function changeItemStatusReducer(state, action) {
  const element = state.find((item) => item.id === action.payload);
  element.isCompleted = !element.isCompleted;
}

export function clearCompletedItemsReducer(state) {
  return state.filter((item) => !item.isCompleted);
}
