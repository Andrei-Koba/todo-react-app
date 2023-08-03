import {
  addItemToArray,
  removeItemFromArray,
  clearCompletedItemsInArray,
  changeItemStatusInArray,
} from '../Repository/toDoLocalRepository';

function performRepositoryAction(type, payload) {
  switch (type) {
    case 'todo/addItem':
      return addItemToArray(payload);
    case 'todo/removeItem':
      return removeItemFromArray(payload);
    case 'todo/changeItemStatus':
      return changeItemStatusInArray(payload);
    case 'todo/clearCompletedItems':
      return clearCompletedItemsInArray(payload);
    default:
      return payload;
  }
}

const reposytoryMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  performRepositoryAction(action.type, action.payload);
  return result;
};

export default reposytoryMiddleware;
