
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../index';

describe('Button Component', () => {
  test('renders the button with text', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  test('calls the onClick callback when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(getByText('Click me'));
    expect(handleClick).toHaveBeenCalled();
  });

  // Add more tests here as needed
});