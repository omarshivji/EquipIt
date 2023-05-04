const { render, fireEvent, screen, waitFor } = require('@testing-library/react');
const React = require('react');
const LoginPage = require('./LoginPage');
const axios = require('axios');
const jestDom = require('@testing-library/jest-dom');

// Mock the axios library
jest.mock('axios');

describe('LoginPage', () => {
  test('renders login and admin login sections', () => {
    render(React.createElement(LoginPage));
    expect(screen.getByText('Login')).toBeInTheDocument();
    expect(screen.getByText('Admin Login')).toBeInTheDocument();
  });

  test('toggles password visibility for user and admin', () => {
    render(React.createElement(LoginPage));

    const userToggleBtn = screen.getByText('Show Password');
    const adminToggleBtn = screen.getByText('Show Password', { selector: '.btn.btn-secondary' });

    fireEvent.click(userToggleBtn);
    fireEvent.click(adminToggleBtn);

    expect(userToggleBtn).toHaveTextContent('Hide Password');
    expect(adminToggleBtn).toHaveTextContent('Hide Password');
  });

  test('successful user login', async () => {
    const response = {
      data: { message: 'Login successful!' },
    };
    axios.post.mockResolvedValue(response);

    render(React.createElement(LoginPage));

    fireEvent.change(screen.getByLabelText('Username:'), { target: { value: 'testuser' } });
    fireEvent.change(screen.getByLabelText('Password:'), { target: { value: 'password' } });

    fireEvent.click(screen.getByText('Login'));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith('http://localhost:8000/login/authenticate', {
        username: 'testuser',
        password: 'password',
      });
    });
  });

  test('successful admin login', async () => {
    const response = {
      data: { message: 'Login successful!' },
    };
    axios.post.mockResolvedValue(response);

    render(React.createElement(LoginPage));

    fireEvent.change(screen.getByLabelText('Username:', { selector: 'input[type="text"]' }), { target: { value: 'admin' } });
    fireEvent.change(screen.getByLabelText('Password:', { selector: 'input[type="password"]' }), { target: { value: 'admin123' } });

    fireEvent.click(screen.getByText('Login', { selector: '.btn.btn-primary' }));

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledTimes(1);
      expect(axios.post).toHaveBeenCalledWith('http://localhost:8000/admin/authenticate', {
        username: 'admin',
        password: 'admin123',
      });
    });
  });
});
