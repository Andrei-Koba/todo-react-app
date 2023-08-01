import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import FilterButton from './FilterButton';

describe('FilterButton', () => {
  it.each([true, false])('renders correctly, isChoosen="%p"', (isChoosen) => {
    const actual = render(
      <FilterButton name="testName" isChoosen={isChoosen} onChoose={jest.fn()} />,
    );
    expect(actual).toMatchSnapshot();
  });

  it('call  handleClick when choosen', async () => {
    const onChoose = jest.fn();
    const actual = render(<FilterButton name="testName" isChoosen={false} onChoose={onChoose} />);
    fireEvent.click(actual.getByRole('button'));
    expect(onChoose).toBeCalled();
  });

  it('add class on mouseEnter', async () => {
    const actual = render(<FilterButton name="testName" isChoosen={false} onChoose={jest.fn()} />);
    const button = actual.getByRole('button');
    fireEvent.mouseEnter(button);
    expect(button.classList.contains('mouseOn')).toBe(true);
    fireEvent.mouseLeave(button);
    expect(button.classList.contains('mouseOn')).toBe(false);
  });
});
