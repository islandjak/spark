import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useSelector, useDispatch } from 'react-redux';
import Website from './Website';

// Mock the Redux hooks
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch,
  useSelector: jest.fn(),
}));

describe('Website Component', () => {
  const mockWebsites = [
    {
      id: '1',
      name: 'Test Website',
      url: 'https://test.com',
      description: 'A test website',
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
    useSelector.mockImplementation((selector) => {
      if (selector.name === 'selectWebsites') {
        return mockWebsites;
      }
      return null;
    });
  });

  it('renders website list', () => {
    render(<Website />);

    expect(screen.getByText(mockWebsites[0].name)).toBeInTheDocument();
    expect(screen.getByText(mockWebsites[0].url)).toBeInTheDocument();
    expect(screen.getByText(mockWebsites[0].description)).toBeInTheDocument();
  });

  it('opens add website form when add button is clicked', () => {
    render(<Website />);

    const addButton = screen.getByRole('button', { name: /add website/i });
    fireEvent.click(addButton);

    expect(screen.getByLabelText(/website name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/website url/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /save/i })).toBeInTheDocument();
  });

  it('handles website creation', async () => {
    render(<Website />);

    // Open add form
    const addButton = screen.getByRole('button', { name: /add website/i });
    fireEvent.click(addButton);

    // Fill form
    const nameInput = screen.getByLabelText(/website name/i);
    const urlInput = screen.getByLabelText(/website url/i);
    const descriptionInput = screen.getByLabelText(/description/i);

    await userEvent.type(nameInput, 'New Website');
    await userEvent.type(urlInput, 'https://newsite.com');
    await userEvent.type(descriptionInput, 'A new website');

    // Submit form
    const saveButton = screen.getByRole('button', { name: /save/i });
    fireEvent.click(saveButton);

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(
        expect.objectContaining({
          type: expect.stringContaining('addWebsite'),
          payload: {
            name: 'New Website',
            url: 'https://newsite.com',
            description: 'A new website',
          },
        })
      );
    });
  });

  it('validates website URL', async () => {
    render(<Website />);

    // Open add form
    const addButton = screen.getByRole('button', { name: /add website/i });
    fireEvent.click(addButton);

    // Fill form with invalid URL
    const urlInput = screen.getByLabelText(/website url/i);
    await userEvent.type(urlInput, 'invalid-url');

    // Submit form
    const saveButton = screen.getByRole('button', { name: /save/i });
    fireEvent.click(saveButton);

    expect(await screen.findByText(/invalid url format/i)).toBeInTheDocument();
  });

  it('handles website deletion', async () => {
    render(<Website />);

    const deleteButton = screen.getByRole('button', { name: /delete/i });
    fireEvent.click(deleteButton);

    // Confirm deletion
    const confirmButton = screen.getByRole('button', { name: /confirm/i });
    fireEvent.click(confirmButton);

    await waitFor(() => {
      expect(mockDispatch).toHaveBeenCalledWith(
        expect.objectContaining({
          type: expect.stringContaining('deleteWebsite'),
          payload: mockWebsites[0].id,
        })
      );
    });
  });
});
