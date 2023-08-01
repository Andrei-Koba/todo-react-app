const todoKey = 'todoArray';

export function setToDoArray(todoArray) {
  localStorage.setItem(todoKey, JSON.stringify(todoArray));
}

export function getToDoArray() {
  return JSON.parse(localStorage.getItem(todoKey)) || [];
}
