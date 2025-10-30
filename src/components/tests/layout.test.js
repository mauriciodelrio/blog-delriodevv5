import React from 'react';
import { render, screen } from '@testing-library/react';
import Layout from '../layout';

test('renders header, main content, and footer', () => {
  render(<Layout>
    Hello World!
  </Layout>);
  
  // Check if header is rendered
  const headerElement = screen.getByRole('banner');
  expect(headerElement).toBeInTheDocument();

  // Check if main content is rendered
  const mainElement = screen.getByRole('main');
  expect(mainElement).toBeInTheDocument();
  expect(mainElement).toHaveTextContent('Hello World!');

  // Check if footer is rendered
  const footerElement = screen.getByRole('contentinfo');
  expect(footerElement).toBeInTheDocument();
});