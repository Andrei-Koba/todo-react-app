import { createSlice } from '@reduxjs/toolkit';
import {
  getToDoArray,
  addItemToArray,
  removeItemFromArray,
  changeItemStatusInArray,
  clearCompletedItemsInArray,
} from '../../Repository/toDoLocalRepository';
import {
  addItemReducer,
  removeItemReducer,
  changeItemStatusReducer,
  clearCompletedItemsReducer,
} from '../Reducers/todoReducers';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: getToDoArray(),
  reducers: {
    addItem: {
      reducer: addItemReducer,
      prepare: addItemToArray,
    },
    removeItem: {
      reducer: removeItemReducer,
      prepare: removeItemFromArray,
    },
    changeItemStatus: {
      reducer: changeItemStatusReducer,
      prepare: changeItemStatusInArray,
    },
    clearCompletedItems: {
      reducer: clearCompletedItemsReducer,
      prepare: clearCompletedItemsInArray,
    },
  },
});

export const {
  addItem, removeItem, changeItemStatus, clearCompletedItems,
} = todoSlice.actions;

export default todoSlice.reducer;
