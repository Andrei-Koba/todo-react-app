import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render, fireEvent } from '@testing-library/react';
import { nanoid } from '@reduxjs/toolkit';
import ControlPannel from './ControlPannel';
import availableFilters from '../../Redux/availableFilters';

const mockStore = configureStore([]);
const state = {
  activeFilter: availableFilters.all,
  todo: [
    {
      id: nanoid(),
      text: 'item 1',
      isCompleted: false,
    },
    {
      id: nanoid(),
      text: 'item 2',
      isCompleted: false,
    },
    {
      id: nanoid(),
      text: 'item 3',
      isCompleted: false,
    },
    {
      id: nanoid(),
      text: 'item 4',
      isCompleted: false,
    },
  ],
};

describe('ControlPannel', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore(state);
    component = render(
      <Provider store={store}>
        <ControlPannel />
      </Provider>,
    );
  });

  it('renders correctly, ', () => {
    expect(component).toMatchSnapshot();
  });
});
