import {
  addItemReducer,
  removeItemReducer,
  changeItemStatusReducer,
  clearCompletedItemsReducer,
} from './todoReducers';
import { setToDoArray } from '../../../Repository/toDoLocalRepository';
import { nanoid } from 'nanoid';

jest.mock('../../../Repository/toDoLocalRepository', () => ({
  setToDoArray: jest.fn(),
}));

jest.mock('nanoid', () => ({
  nanoid: () => 'testId2',
}));

describe('todo reducers', () => {
  it('addItemReducer', () => {
    // arrange
    const action = {
      payload: {
        text: 'testText2',
        isCompleted: false,
      },
    };
    const state = [
      {
        id: 'testId1',
        text: 'testText1',
        isCompleted: false,
      },
    ];
    const expectedState = [
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
    addItemReducer(state, action);

    // assert
    expect(setToDoArray).toBeCalledWith(expectedState);
    expect(state).toStrictEqual(expectedState);
  });

  it('removeItemReducer', () => {
    // arrange
    const action = {
      payload: 'testId2',
    };
    const state = [
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
    const expectedState = [
        {
          id: 'testId1',
          text: 'testText1',
          isCompleted: false,
        },
      ];

    // act
    const actual = removeItemReducer(state, action);

    // assert
    expect(setToDoArray).toBeCalledWith(expectedState);
    expect(actual).toStrictEqual(expectedState);
  });

  it('changeItemStatusReducer', () => {
    // arrange
    const action = {
      payload: 'testId2',
    };
    const state = [
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
    const expectedState = [
        {
          id: 'testId1',
          text: 'testText1',
          isCompleted: false,
        },
        {
          id: 'testId2',
          text: 'testText2',
          isCompleted: true,
        },
      ];

    // act
    changeItemStatusReducer(state, action);

    // assert
    expect(setToDoArray).toBeCalledWith(expectedState);
    expect(state).toStrictEqual(expectedState);
  });

  it('clearCompletedItemsReducer', () => {
    // arrange
    const state = [
      {
        id: 'testId1',
        text: 'testText1',
        isCompleted: true,
      },
      {
        id: 'testId2',
        text: 'testText2',
        isCompleted: true,
      },
      {
        id: 'testId3',
        text: 'testText3',
        isCompleted: false,
      },
    ];
    const expectedState = [
        {
          id: 'testId3',
          text: 'testText3',
          isCompleted: false,
        },
      ];

    // act
    const actual = clearCompletedItemsReducer(state);

    // assert
    expect(setToDoArray).toBeCalledWith(expectedState);
    expect(actual).toStrictEqual(expectedState);
  });
});
