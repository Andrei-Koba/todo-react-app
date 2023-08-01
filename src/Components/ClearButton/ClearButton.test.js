import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ClearButton from './ClearButton';

describe('ClearButton', () => {
  it('renders correctly', () => {
    const actual = render(<ClearButton handleClick={jest.fn()} />);
    expect(actual).toMatchSnapshot();
  });

  it('call  handleClick when clicked', async () => {
    const handleClick = jest.fn();
    const actual = render(<ClearButton handleClick={handleClick} />);
    fireEvent.click(actual.getByRole('button'));
    expect(handleClick).toBeCalled();
  });

  it('add class on mouseEnter', async () => {
    const actual = render(<ClearButton handleClick={jest.fn()} />);
    const button = actual.getByRole('button');
    fireEvent.mouseEnter(button);
    expect(button.classList.contains('mouseOn')).toBe(true);
    fireEvent.mouseLeave(button);
    expect(button.classList.contains('mouseOn')).toBe(false);
  });
});
