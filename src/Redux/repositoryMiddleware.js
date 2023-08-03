import { type } from '@testing-library/user-event/dist/type';
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
  action.payload = performRepositoryAction(action.type, action.payload);
  const result = next(action);
  return result;
};

export default reposytoryMiddleware;
