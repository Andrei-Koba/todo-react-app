import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DeleteButton from './DeleteButton';

describe('DeleteButton', () => {
  it('renders correctly', () => {
    const actual = render(<DeleteButton handleClick={jest.fn()} />);
    expect(actual).toMatchSnapshot();
  });

  it('call  handleClick when clicked', async () => {
    const handleClick = jest.fn();
    const actual = render(<DeleteButton handleClick={handleClick} />);
    fireEvent.click(actual.getByRole('button'));
    expect(handleClick).toBeCalled();
  });
});
