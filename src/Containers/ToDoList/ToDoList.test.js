import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, fireEvent } from '@testing-library/react';
import ToDoList from './ToDoList';

const state = {
  todo: [
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
    {
      id: 'testId4',
      text: 'testText4',
      isCompleted: false,
    },
  ],
};
const emptyState = {
  todo: [
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
    {
      id: 'testId4',
      text: 'testText4',
      isCompleted: false,
    },
  ],
};
const mockStore = configureStore([]);

describe('ToDoList', () => {
  it('renders correctly with items', () => {
    const store = mockStore(state);
    const component = render(
      <Provider store={store}>
        <ToDoList />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders correctly without items', () => {
    const store = mockStore(emptyState);
    const component = render(
      <Provider store={store}>
        <ToDoList />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });
});
