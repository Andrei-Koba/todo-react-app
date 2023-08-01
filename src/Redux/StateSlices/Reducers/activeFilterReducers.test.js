import updateActiveFilterReducer from './activeFilterReducers';
import { setFilter } from '../../../Repository/filterLocalRepository';

jest.mock('../../../Repository/filterLocalRepository', () => ({
  setFilter: jest.fn(),
}));

describe('active filter reducer', () => {
  it('updateActiveFilterReducer', () => {
    // arrange
    const action = {
      payload: 'testFilter',
    };

    // act
    const actual = updateActiveFilterReducer(null, action);

    // assert
    expect(setFilter).toBeCalledWith(action.payload);
    expect(actual).toBe(action.payload);
  });
});
