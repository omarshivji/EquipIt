const { render, screen } = require ('@testing-library/react');
const React = require('react');
const HomePage = require ('./HomePage')


describe('HomePage', () => {
  it('renders the correct content', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument();
    expect(screen.getByText(/same day delivery/i)).toBeInTheDocument();
    expect(screen.getByText(/sign up here/i)).toHaveAttribute('href', '/register');
    expect(screen.getByRole('heading', { name: 'Our Services' })).toBeInTheDocument();
    expect(screen.getByText(/2-hour delivery times!/i)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument();
    expect(screen.getByText(/phone: 01234 56789/i)).toBeInTheDocument();
    expect(screen.getByText(/email: support@equipitdelivers\.com/i)).toBeInTheDocument();
  });
});
