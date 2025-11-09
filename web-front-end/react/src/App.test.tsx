import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders accounts dropdown', () => {
  render(<App />);
  const accountsElements = screen.getAllByText(/accounts/i);
  expect(accountsElements.length).toBeGreaterThan(0);
});
