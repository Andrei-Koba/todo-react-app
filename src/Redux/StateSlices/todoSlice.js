import { createSlice } from '@reduxjs/toolkit';
import { getToDoArray } from '../../Repository/toDoLocalRepository';
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
    },
    removeItem: {
      reducer: removeItemReducer,
    },
    changeItemStatus: {
      reducer: changeItemStatusReducer,
    },
    clearCompletedItems: {
      reducer: clearCompletedItemsReducer,
    },
  },
});

export const {
  addItem, removeItem, changeItemStatus, clearCompletedItems,
} = todoSlice.actions;

export default todoSlice.reducer;
