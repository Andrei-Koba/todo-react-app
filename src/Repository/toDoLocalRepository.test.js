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
      id: 'testId',
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
        id: 'testId',
        text: 'newItem',
        isCompleted: false,
      },
    ];

    // act
    addItemToArray(itemData);

    // assert
    expect(setItemMock).toBeCalledWith('todoArray', JSON.stringify(expectedArray));
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
    removeItemFromArray(itemId);

    // assert
    expect(setItemMock).toBeCalledWith('todoArray', JSON.stringify(expectedArray));
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
    changeItemStatusInArray(itemId);

    // assert
    expect(setItemMock).toBeCalledWith('todoArray', JSON.stringify(expectedArray));
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
    clearCompletedItemsInArray();

    // assert
    expect(setItemMock).toBeCalledWith('todoArray', JSON.stringify(expectedArray));
  });
});
