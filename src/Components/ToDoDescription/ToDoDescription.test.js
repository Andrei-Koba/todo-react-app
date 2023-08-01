import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ToDoDescription from './ToDoDescription';

describe('ToDoDescription', () => {
  it.each([true, false])('renders correctly, isCompleted="%p"', async (isCompleted) => {
    const actual = render(<ToDoDescription isCompleted={isCompleted} text="testText" />);
    expect(actual).toMatchSnapshot();
  });
});
