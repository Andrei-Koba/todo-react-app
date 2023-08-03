import {
  addItemReducer,
  changeItemStatusReducer,
  removeItemReducer,
  clearCompletedItemsReducer,
} from './todoReducers';

describe('todo Reducers', () => {
  it('addItemReducer', () => {
    // arrange
    const itemData = {
      id: 'newId',
      text: 'newItem',
      isCompleted: false,
    };
    const state = [
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
    addItemReducer(state, { payload: itemData });

    // assert
    expect(state).toContain(itemData);
  });
  it('removeItemReducer', () => {
    // arrange
    const itemId = 'testId1';
    const state = [
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
    const newState = removeItemReducer(state, { payload: itemId });

    // assert
    expect(newState.some(item => item.id === itemId)).toBe(false);
  });
  it('changeItemStatusReducer', () => {
    // arrange
    const itemId = 'testId1';
    const state = [
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
    changeItemStatusReducer(state, { payload: itemId });

    // assert
    expect(state.find(item => item.id === itemId).isCompleted).toBe(false);
  });
  it('clearCompletedItemsReducer', () => {
    // arrange
    const itemId = 'testId1';
    const state = [
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
        id: 'testId3',
        text: 'testText3',
        isCompleted: true,
      },
    ];

    // act
    const newState = clearCompletedItemsReducer(state, { payload: {} });

    // assert
    expect(newState.length).toBe(1);
    expect(newState[0].id).toBe('testId2');
  });
});
