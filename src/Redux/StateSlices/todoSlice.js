import { createSlice } from '@reduxjs/toolkit';
import { getToDoArray } from '../../Repository/toDoLocalRepository';
import {
  addItemReducer,
  removeItemReducer,
  changeItemStatusReducer,
  clearCompletedItemsReducer,
} from './Reducers/todoReducers';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: getToDoArray(),
  reducers: {
    addItem: addItemReducer,
    removeItem: removeItemReducer,
    changeItemStatus: changeItemStatusReducer,
    clearCompletedItems: clearCompletedItemsReducer,
  },
});

export const {
  addItem, removeItem, changeItemStatus, clearCompletedItems,
} = todoSlice.actions;

export default todoSlice.reducer;
