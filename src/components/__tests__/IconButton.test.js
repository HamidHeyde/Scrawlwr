import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { IconButton } from '../IconButton';

describe('IconButton', () => {
  test('renders add icon when icon prop is "add"', () => {
    render(<IconButton icon="add" />);
    const addIcon = screen.getByTestId('AddIcon');
    
    expect(addIcon).toBeInTheDocument();
  });

  test('renders remove icon when icon prop is "remove"', () => {
    render(<IconButton icon="remove" />);
    const removeIcon = screen.getByTestId('RemoveIcon');

    expect(removeIcon).toBeInTheDocument();
  });

  test('calls onClick handler when clicked', () => {
    const mockOnClick = jest.fn();
    render(<IconButton icon="add" onClick={mockOnClick} />);
    const button = screen.getByTestId('AddIcon');
    fireEvent.click(button);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('applies correct styles to the icon button', () => {
    render(<IconButton icon="add" />);
    const button = screen.getByTestId('AddIcon');

    expect(button).toHaveStyle({
      borderRadius: '5px',
      fontSize: '30px',
    });
  });

  test('applies hover styles when hovered', () => {
    render(<IconButton icon="add" />);
    const button = screen.getByTestId('AddIcon');
    fireEvent.mouseOver(button);

    expect(button).toHaveStyle({
      backgroundColor: '#E5E8FD',
      color: '#253CF2',
    });
  });

  test('throws error for invalid icon prop', () => {
    console.error = jest.fn();
    expect(() => render(<IconButton icon="invalid" />)).toThrow();
  });
});
