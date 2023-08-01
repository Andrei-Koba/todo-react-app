import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ToDoCheckbox from './ToDoCheckbox';

describe('ToDoCheckbox', () => {
  it.each([true, false])('renders correctly, isChecked="%p"', async (isChecked) => {
    const actual = render(
      <ToDoCheckbox id="testId" isChecked={isChecked} handleChange={jest.fn()} />,
    );
    expect(actual).toMatchSnapshot();
  });

  it('call handleChange when changed', async () => {
    const onChange = jest.fn();
    const actual = render(<ToDoCheckbox id="testId" isChecked={false} handleChange={onChange} />);
    fireEvent.click(actual.getByRole('checkbox'));
    expect(onChange).toBeCalled();
  });
});
