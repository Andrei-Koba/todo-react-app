import { when } from 'jest-when';
import {
  getToDoArray,
  addItemToArray,
  removeItemFromArray,
  changeItemStatusInArray,
  clearCompletedItemsInArray,
} from './toDoLocalRepository';
import { nanoid } from 'nanoid';

const initialArray = [
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

const getItemMock = () => JSON.stringify(initialArray);
const setItemMock = jest.fn();
jest.mock('nanoid', () => ({
  nanoid: () => 'generatedId',
}));

Object.defineProperty(window, 'localStorage', {
  value: {
    getItem: (...args) => getItemMock(...args),
    setItem: (...args) => setItemMock(...args),
  },
});

describe('todo local repository', () => {
  it('addItemToArray', () => {
    // arrange
    const itemData = {
      text: 'newItem',
      isCompleted: false,
    };
    const expectedArray = [
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
      {
        id: 'generatedId',
        text: 'newItem',
        isCompleted: false,
      },
    ];

    // act
    const actual = addItemToArray(itemData);

    // assert
    expect(actual.payload).toStrictEqual(expectedArray);
    expect(setItemMock).toBeCalledWith('todoArray', JSON.stringify(actual.payload));
  });
  it('removeItemFromArray', () => {
    // arrange
    const itemId = 'testId1';
    const expectedArray = [
      {
        id: 'testId2',
        text: 'testText2',
        isCompleted: false,
      },
    ];

    // act
    const actual = removeItemFromArray(itemId);

    // assert
    expect(actual.payload).toStrictEqual(expectedArray);
    expect(setItemMock).toBeCalledWith('todoArray', JSON.stringify(actual.payload));
  });
  it('changeItemStatusInArray', () => {
    // arrange
    const itemId = 'testId1';
    const expectedArray = [
      {
        id: 'testId1',
        text: 'testText1',
        isCompleted: false,
      },
      {
        id: 'testId2',
        text: 'testText2',
        isCompleted: false,
      },
    ];

    // act
    const actual = changeItemStatusInArray(itemId);

    // assert
    expect(actual.payload).toStrictEqual(expectedArray);
    expect(setItemMock).toBeCalledWith('todoArray', JSON.stringify(actual.payload));
  });
  it('clearCompletedItemsInArray', () => {
    // arrange
    const expectedArray = [
      {
        id: 'testId2',
        text: 'testText2',
        isCompleted: false,
      },
    ];

    // act
    const actual = clearCompletedItemsInArray();

    // assert
    expect(actual.payload).toStrictEqual(expectedArray);
    expect(setItemMock).toBeCalledWith('todoArray', JSON.stringify(actual.payload));
  });
});
