import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, fireEvent } from '@testing-library/react';
import MainInput from './MainInput';

const mockStore = configureStore([]);

describe('MainInput', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore();
    component = render(
      <Provider store={store}>
        <MainInput />
      </Provider>,
    );
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('dispatch addItem with correct value', () => {
    const setState = jest.fn();
    jest.spyOn(React, 'useState').mockImplementationOnce((initState) => [initState, setState]);
    const newValue = 'testValue';
    const mainInput = component.getByPlaceholderText('Input your ToDo item and press ENTER');
    fireEvent.change(mainInput, { target: { value: newValue } });
    fireEvent.keyUp(mainInput, { key: 'Enter' });
    expect(store.getActions()).toEqual([
      {
        payload: { isCompleted: false, text: 'testValue' },
        type: 'todo/addItem',
      },
    ]);
    expect(mainInput.value).toBe('');
  });
});
