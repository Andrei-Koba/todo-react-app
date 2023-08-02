import { nanoid } from 'nanoid';

const todoKey = 'todoArray';

function setToDoArray(todoArray) {
  localStorage.setItem(todoKey, JSON.stringify(todoArray));
}

export function getToDoArray() {
  return JSON.parse(localStorage.getItem(todoKey)) || [];
}

export function addItemToArray(itemData) {
  const array = getToDoArray();
  const item = {
    id: nanoid(),
    text: itemData.text,
    isCompleted: itemData.isCompleted,
  };
  array.push(item);
  setToDoArray(array);
  return { payload: array };
}

export function removeItemFromArray(itemId) {
  const array = getToDoArray();
  const newArray = array.filter((item) => item.id !== itemId);
  setToDoArray(newArray);
  return { payload: newArray };
}

export function changeItemStatusInArray(itemId) {
  const array = getToDoArray();
  const element = array.find((item) => item.id === itemId);
  element.isCompleted = !element.isCompleted;
  setToDoArray(array);
  return { payload: array };
}

export function clearCompletedItemsInArray() {
  const array = getToDoArray();
  const newArray = array.filter((item) => !item.isCompleted);
  setToDoArray(newArray);
  return { payload: newArray };
}
