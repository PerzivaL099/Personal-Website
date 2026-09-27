import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App component', () => {
  it('renders without crashing and displays the header name', () => {
    render(<App />);
    const nameElements = screen.getAllByText(/Mario Estrada/i);
    expect(nameElements.length).toBeGreaterThan(0);
  });
});
