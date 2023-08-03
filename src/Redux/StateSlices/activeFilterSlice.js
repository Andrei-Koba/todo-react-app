import { createSlice } from '@reduxjs/toolkit';
import { getFilter, setFilter } from '../../Repository/filterLocalRepository';
import activeFilterReducer from '../Reducers/activeFilterReducer';

export const activeFilterSlice = createSlice({
  name: 'activeFilter',
  initialState: getFilter(),
  reducers: {
    updateActiveFilter: {
      reducer: activeFilterReducer,
      prepare: setFilter,
    },
  },
});

export const { updateActiveFilter } = activeFilterSlice.actions;

export default activeFilterSlice.reducer;
