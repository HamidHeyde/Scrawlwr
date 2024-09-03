import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { UpvoteButton } from '../UpvoteButton';

describe('UpvoteButton', () => {
  test('renders the upvote button', () => {
    render(<UpvoteButton active={false} onClick={() => {}} />);
    const upvoteButton = screen.getByTestId('ArrowUpwardIcon');

    expect(upvoteButton).toBeInTheDocument();
  });

  test('applies inactive styles when active prop is false', () => {
    render(<UpvoteButton active={false} onClick={() => {}} />);
    const upvoteButton = screen.getByTestId('ArrowUpwardIcon');

    expect(upvoteButton).toHaveStyle('borderRadius: 5px');
    expect(upvoteButton).toHaveStyle('fontSize: 30px');
    expect(upvoteButton).toHaveStyle('padding: 5px')
  });

  test('applies active styles when active prop is true', () => {
    render(<UpvoteButton active={true} onClick={() => {}} />);
    const upvoteButton = screen.getByTestId('ArrowUpwardIcon');
    
    expect(upvoteButton).toHaveStyle('color: #253CF2');
    expect(upvoteButton).toHaveStyle('background-color: #E5E8FD');
  });

  test('calls onClick handler when clicked', () => {
    const mockOnClick = jest.fn();
    render(<UpvoteButton active={false} onClick={mockOnClick} />);
    const upvoteButton = screen.getByTestId('ArrowUpwardIcon');
    fireEvent.click(upvoteButton);
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  test('changes styles on hover', () => {
    render(<UpvoteButton active={false} onClick={() => {}} />);
    const upvoteButton = screen.getByTestId('ArrowUpwardIcon');
    fireEvent.mouseEnter(upvoteButton);
    
    expect(upvoteButton).toHaveStyle('background-color: #E5E8FD');
    expect(upvoteButton).toHaveStyle('color: #253CF2');
  });

  test('cursor changes to pointer on hover', () => {
    render(<UpvoteButton active={false} onClick={() => {}} />);
    const upvoteButton = screen.getByTestId('ArrowUpwardIcon');
    fireEvent.mouseEnter(upvoteButton);
    
    expect(upvoteButton).toHaveStyle('cursor: pointer');
  });
});
