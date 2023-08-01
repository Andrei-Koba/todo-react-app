import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ToDoContainer from './ToDoContainer';

describe('ToDoContainer', () => {
  it('renders correctly', () => {
    const actual = render(<ToDoContainer />);
    expect(actual).toMatchSnapshot();
  });
});
