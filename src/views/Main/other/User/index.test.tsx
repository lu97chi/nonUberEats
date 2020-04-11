import React from 'react';
import { render } from '@testing-library/react';
import User from '.';

test('renders learn react link', () => {
  const { getByText } = render(<User />);
  const linkElement = getByText(/User/i);
  expect(linkElement).toBeInTheDocument();
});