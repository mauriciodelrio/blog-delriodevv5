import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../header';

test('renders header with correct links', () => {
  render(<Header />);
  const homeLink = screen.getByText('Home');
  const postsLink = screen.getByText('Posts');
  
  expect(homeLink).toBeInTheDocument();
  expect(postsLink).toBeInTheDocument();
});