import { when } from 'jest-when';
import { getFilter, setFilter } from './filterLocalRepository';
import availableFilters from '../Redux/availableFilters';

const getItemMock = jest.fn();
const setItemMock = jest.fn();

Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: (...args) => getItemMock(...args),
    setItem: (...args) => setItemMock(...args),
  },
});

describe('filter local repository', () => {
  it('set active filter', () => {
    // arrange
    const newFilter = availableFilters.completed;

    // act
    setFilter(newFilter);

    // assert
    expect(setItemMock).toBeCalledWith('activeFilter', newFilter);
  });
  it('get active filter, with empty value', () => {
    // arrange
    when(getItemMock).calledWith('activeFilter').mockReturnValue(undefined);

    // act
    const actual = getFilter();

    // assert
    expect(actual).toBe(availableFilters.all);
  });
  it('get active filter, with not empty value', () => {
    // arrange
    const expected = availableFilters.active;
    when(getItemMock).calledWith('activeFilter').mockReturnValue(expected);

    // act
    const actual = getFilter();

    // assert
    expect(actual).toBe(expected);
  });
});
