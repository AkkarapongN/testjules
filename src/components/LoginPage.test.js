import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';

test('renders login page heading', () => {
  render(<LoginPage />);
  const headingElement = screen.getByRole('heading', { name: /login/i });
  expect(headingElement).toBeInTheDocument();
});

test('renders username input field', () => {
  render(<LoginPage />);
  const usernameInput = screen.getByLabelText(/Username\/Email/i);
  expect(usernameInput).toBeInTheDocument();
});

test('renders password input field', () => {
  render(<LoginPage />);
  const passwordInput = screen.getByLabelText(/Password/i);
  expect(passwordInput).toBeInTheDocument();
});

test('renders login submit button', () => {
  render(<LoginPage />);
  const loginButton = screen.getByRole('button', { name: /Sign In/i });
  expect(loginButton).toBeInTheDocument();
});
