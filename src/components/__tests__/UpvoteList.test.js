import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'
import { UpvoteList } from '../UpvoteList';
import { UpvoteContext } from '../../context/UpvoteContext';

const mockUpvoteData = [
  { mode: 'Single', data: [false, true, false] },
  { mode: 'List', data: [true, true, false] },
];

const mockSetUpVoteData = jest.fn();

const renderWithContext = (component, { upVoteData = mockUpvoteData, setUpVoteData = mockSetUpVoteData } = {}) => {
  return render(
    <UpvoteContext.Provider value={{ upVoteData, setUpVoteData }}>
      {component}
    </UpvoteContext.Provider>
  );
};

describe('UpvoteList', () => {
  test('renders UpvoteList component', () => {
    renderWithContext(<UpvoteList listIndex={0} />);
    
    expect(screen.getByText('Up-votes Selection Modes')).toBeInTheDocument();
  });

  test('displays correct number of UpvoteButtons', () => {
    renderWithContext(<UpvoteList listIndex={0} />);
    
    const upvoteButtons = screen.getAllByTestId('ArrowUpwardIcon')
    
    expect(upvoteButtons).toHaveLength(3);
  });

  test('toggles upvote in Single mode', () => {
    renderWithContext(<UpvoteList listIndex={0} />);
    
    const upvoteButtons = screen.getAllByTestId('ArrowUpwardIcon')
    fireEvent.click(upvoteButtons[0]);
    
    expect(mockSetUpVoteData).toHaveBeenCalledWith([
      { mode: 'Single', data: [true, true, false] },
      mockUpvoteData[1],
    ]);
  });

  test('toggles upvote in List mode', () => {
    renderWithContext(<UpvoteList listIndex={1} />);
    
    const upvoteButtons = screen.getAllByTestId('ArrowUpwardIcon')
    fireEvent.click(upvoteButtons[2]);
    
    expect(mockSetUpVoteData).toHaveBeenCalledWith([
      mockUpvoteData[0],
      { mode: 'List', data: [true, true, true] },
    ]);
  });

  test('adds new upvote', () => {
    renderWithContext(<UpvoteList listIndex={0} />);
    
    const addButton = screen.getByTestId('AddIcon')
    fireEvent.click(addButton);
    
    expect(mockSetUpVoteData).toHaveBeenCalledWith([
      { mode: 'Single', data: [false, true, false, false] },
      mockUpvoteData[1],
    ]);
  });

  test('removes last upvote', () => {
    renderWithContext(<UpvoteList listIndex={0} />);
    
    const removeButton = screen.getByTestId('RemoveIcon')
    fireEvent.click(removeButton);
    
    expect(mockSetUpVoteData).toHaveBeenCalledWith([
      { mode: 'Single', data: [false, true] },
      mockUpvoteData[1],
    ]);
  });

  test('changes upvote mode', () => {
    renderWithContext(<UpvoteList listIndex={0} />);
    
    const listButton = screen.getByText('List');
    fireEvent.click(listButton)
    
    expect(mockSetUpVoteData).toHaveBeenCalledWith([
      { mode: 'List', data: [false, true, false] },
      mockUpvoteData[1],
    ]);
  });
});
