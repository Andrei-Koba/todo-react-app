import { when } from 'jest-when';
import { setToDoArray, getToDoArray } from './toDoLocalRepository';

const getItemMock = jest.fn();
const setItemMock = jest.fn();

Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: (...args) => getItemMock(...args),
    setItem: (...args) => setItemMock(...args),
  },
});

describe('todo local repository', () => {
  it('set todo array', () => {
    // arrange
    const newArray = [
      {
        id: 'testId1',
        text: 'testText1',
        isCompleted: true,
      },
      {
        id: 'testId2',
        text: 'testText2',
        isCompleted: false,
      },
    ];

    // act
    setToDoArray(newArray);

    // assert
    expect(setItemMock).toBeCalledWith('todoArray', JSON.stringify(newArray));
  });
  it('get todo array, with empty value', () => {
    // arrange
    when(getItemMock).calledWith('todoArray').mockReturnValue(null);

    // act
    const actual = getToDoArray();

    // assert
    expect(actual).toStrictEqual([]);
  });
  it('get todo array, with not empty value', () => {
    // arrange
    const expected = [
      {
        id: 'testId1',
        text: 'testText1',
        isCompleted: true,
      },
      {
        id: 'testId2',
        text: 'testText2',
        isCompleted: false,
      },
    ];
    const stringifiedExpected = JSON.stringify(expected);
    when(getItemMock).calledWith('todoArray').mockReturnValue(stringifiedExpected);

    // act
    const actual = getToDoArray();

    // assert
    expect(actual).toStrictEqual(expected);
  });
});
