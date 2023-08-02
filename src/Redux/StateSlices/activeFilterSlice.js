import { createSlice } from '@reduxjs/toolkit';
import { getFilter, setFilter } from '../../Repository/filterLocalRepository';

export const activeFilterSlice = createSlice({
  name: 'activeFilter',
  initialState: getFilter(),
  reducers: {
    updateActiveFilter: {
      reducer: (state, action) => action.payload,
      prepare: setFilter,
    },
  },
});

export const { updateActiveFilter } = activeFilterSlice.actions;

export default activeFilterSlice.reducer;
