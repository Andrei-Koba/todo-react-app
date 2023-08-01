import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, fireEvent } from '@testing-library/react';
import ToDoItem from './ToDoItem';

const item = {
  id: 'testId',
  text: 'testText',
  isCompleted: false,
};
const mockStore = configureStore([]);

describe('ToDoItem', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({});
    component = render(
      <Provider store={store}>
        <ToDoItem item={item} />
      </Provider>,
    );
  });

  it.each([true, false])('renders correctly, mouseOn="%p"', (mouseOn) => {
    if (mouseOn) {
      const listItem = component.getByRole('listitem');
      fireEvent.mouseEnter(listItem);
    }
    expect(component).toMatchSnapshot();
  });

  it('add class on mouseEnter', async () => {
    const listItem = component.getByRole('listitem');
    fireEvent.mouseEnter(listItem);
    expect(listItem.classList.contains('mouseOn')).toBe(true);
    fireEvent.mouseLeave(listItem);
    expect(listItem.classList.contains('mouseOn')).toBe(false);
  });
});
