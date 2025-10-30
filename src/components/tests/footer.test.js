import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../footer';

test('renders footer with correct year and author', () => {
  render(<Footer />);
  const currentYear = new Date().getFullYear();
  const footerText = screen.getByText(`©${currentYear} - Mauricio Del Río`);
  expect(footerText).toBeInTheDocument();
});