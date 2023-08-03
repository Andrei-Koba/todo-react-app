import { configureStore } from '@reduxjs/toolkit';
import activeFilterReducer from './StateSlices/activeFilterSlice';
import todoReducer from './StateSlices/todoSlice';
import reposytoryMiddleware from './repositoryMiddleware';

export default function getStore() {
  return configureStore({
    reducer: {
      activeFilter: activeFilterReducer,
      todo: todoReducer,
    },
    middleware: [reposytoryMiddleware],
  });
}
