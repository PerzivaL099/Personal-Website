import { render, screen } from '@testing-library/react';
import About from '../components/About';
import { aboutData } from '../data/aboutData';

describe('About component', () => {
  it('renders the About section with name and bio', () => {
    render(<About />);
    
    // Check for the section title
    expect(screen.getByRole('heading', { name: /About Me/i })).toBeInTheDocument();
    
    // Check that the first name is rendered
    const firstName = aboutData.personalInfo.name.split(' ')[0];
    expect(screen.getByText(new RegExp(`Hi, I'm ${firstName}`, 'i'))).toBeInTheDocument();
  });
});
