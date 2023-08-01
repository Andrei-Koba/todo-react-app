import { createSlice } from '@reduxjs/toolkit';
import { getFilter } from '../../Repository/filterLocalRepository';
import updateActiveFilterReducer from './Reducers/activeFilterReducers';

export const activeFilterSlice = createSlice({
  name: 'activeFilter',
  initialState: getFilter(),
  reducers: {
    updateActiveFilter: updateActiveFilterReducer,
  },
});

export const { updateActiveFilter } = activeFilterSlice.actions;

export default activeFilterSlice.reducer;
