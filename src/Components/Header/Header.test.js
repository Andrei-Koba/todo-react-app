import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders correctly', () => {
    const actual = render(<Header />);
    expect(actual).toMatchSnapshot();
  });
});
