import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useSelector, useDispatch } from 'react-redux';
import Profile from './Profile';

// Mock the Redux hooks
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
  useSelector: jest.fn(),
}));

describe('Profile Component', () => {
  const mockUser = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
  };

  beforeEach(() => {
    // Reset all mocks
    jest.clearAllMocks();
    // Set up the mock user in Redux store
    useSelector.mockImplementation((selector) => {
      if (selector.name === 'selectUser') {
        return mockUser;
      }
      return null;
    });
  });

  it('renders user profile information', () => {
    render(<Profile />);

    expect(screen.getByText(mockUser.firstName)).toBeInTheDocument();
    expect(screen.getByText(mockUser.lastName)).toBeInTheDocument();
    expect(screen.getByText(mockUser.email)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /edit/i })).toBeInTheDocument();
  });

  it('enables editing mode when edit button is clicked', async () => {
    render(<Profile />);

    const editButton = screen.getByRole('button', { name: /edit/i });
    fireEvent.click(editButton);

    expect(screen.getByDisplayValue(mockUser.firstName)).toBeInTheDocument();
    expect(screen.getByDisplayValue(mockUser.lastName)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /cancel/i })).toBeInTheDocument();
  });

  it('handles profile update submission', async () => {
    render(<Profile />);

    // Enter edit mode
    const editButton = screen.getByRole('button', { name: /edit/i });
    fireEvent.click(editButton);

    // Update fields
    const firstNameInput = screen.getByDisplayValue(mockUser.firstName);
    const lastNameInput = screen.getByDisplayValue(mockUser.lastName);

    await userEvent.clear(firstNameInput);
    await userEvent.type(firstNameInput, 'Jane');
    await userEvent.clear(lastNameInput);
    await userEvent.type(lastNameInput, 'Smith');

    // Submit form
    const saveButton = screen.getByRole('button', { name: /save/i });
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(
        expect.objectContaining({
          type: expect.stringContaining('updateProfile'),
          payload: {
            firstName: 'Jane',
            lastName: 'Smith',
            email: mockUser.email,
          },
        })
      );
    });
  });

  it('cancels editing when cancel button is clicked', () => {
    render(<Profile />);

    // Enter edit mode
    const editButton = screen.getByRole('button', { name: /edit/i });
    fireEvent.click(editButton);

    // Update a field
    const firstNameInput = screen.getByDisplayValue(mockUser.firstName);
    fireEvent.change(firstNameInput, { target: { value: 'Jane' } });

    // Click cancel
    const cancelButton = screen.getByRole('button', { name: /cancel/i });
    fireEvent.click(cancelButton);

    // Verify we're back in view mode with original values
    expect(screen.getByText(mockUser.firstName)).toBeInTheDocument();
    expect(screen.queryByDisplayValue('Jane')).not.toBeInTheDocument();
  });
});
