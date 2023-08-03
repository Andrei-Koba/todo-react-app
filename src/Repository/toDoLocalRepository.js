const todoKey = 'todoArray';

function setToDoArray(todoArray) {
  localStorage.setItem(todoKey, JSON.stringify(todoArray));
}

export function getToDoArray() {
  return JSON.parse(localStorage.getItem(todoKey)) || [];
}

export function addItemToArray(item) {
  const array = getToDoArray();
  array.push(item);
  setToDoArray(array);
}

export function removeItemFromArray(itemId) {
  const array = getToDoArray();
  const newArray = array.filter((item) => item.id !== itemId);
  setToDoArray(newArray);
}

export function changeItemStatusInArray(itemId) {
  const array = getToDoArray();
  const element = array.find((item) => item.id === itemId);
  element.isCompleted = !element.isCompleted;
  setToDoArray(array);
}

export function clearCompletedItemsInArray() {
  const array = getToDoArray();
  const newArray = array.filter((item) => !item.isCompleted);
  setToDoArray(newArray);
}
