import { configureStore } from '@reduxjs/toolkit';
import activeFilterReducer from './StateSlices/activeFilterSlice';
import todoReducer from './StateSlices/todoSlice';

export default function getStore() {
  return configureStore({
    reducer: {
      activeFilter: activeFilterReducer,
      todo: todoReducer,
    },
  });
}
