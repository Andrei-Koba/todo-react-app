import { createSlice } from '@reduxjs/toolkit';
import {
  getToDoArray,
  addItemToArray,
  removeItemFromArray,
  changeItemStatusInArray,
  clearCompletedItemsInArray,
} from '../../Repository/toDoLocalRepository';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: getToDoArray(),
  reducers: {
    addItem: {
      reducer: (state, action) => action.payload,
      prepare: addItemToArray,
    },
    removeItem: {
      reducer: (state, action) => action.payload,
      prepare: removeItemFromArray,
    },
    changeItemStatus: {
      reducer: (state, action) => action.payload,
      prepare: changeItemStatusInArray,
    },
    clearCompletedItems: {
      reducer: (state, action) => action.payload,
      prepare: clearCompletedItemsInArray,
    },
  },
});

export const {
  addItem, removeItem, changeItemStatus, clearCompletedItems,
} = todoSlice.actions;

export default todoSlice.reducer;
