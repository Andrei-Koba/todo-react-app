import activeFilterReducer from "./activeFilterReducer";
import availableFilters from '../availableFilters';

describe('active filter Reducers', () => {
    it('activeFilterReducer', () => {
      // arrange
      const newFilter = availableFilters.completed;
  
      // act
      const actual = activeFilterReducer('oldFilter', { payload: newFilter });
  
      // assert
      expect(actual).toBe(newFilter);
    });
});