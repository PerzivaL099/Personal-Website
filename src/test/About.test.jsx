import { render, screen } from '@testing-library/react';
import About from '../components/About';
import { aboutData } from '../data/aboutData';

describe('About component', () => {
  it('renders the About section with name, bio, and social links', () => {
    render(<About />);
    
    // Check for the section title
    expect(screen.getByRole('heading', { name: /About Me/i })).toBeInTheDocument();
    
    // Check that the first name is rendered
    const firstName = aboutData.personalInfo.name.split(' ')[0];
    expect(screen.getByText(new RegExp(`Hi, I'm ${firstName}`, 'i'))).toBeInTheDocument();

    // Verify Social Links
    expect(screen.getByRole('link', { name: /View Resume/i })).toHaveAttribute('href', aboutData.personalInfo.resumeUrl);
    expect(screen.getByRole('link', { name: /Email/i })).toHaveAttribute('href', `mailto:${aboutData.personalInfo.email}`);
    expect(screen.getByRole('link', { name: /LinkedIn/i })).toHaveAttribute('href', aboutData.personalInfo.linkedin);
    expect(screen.getByRole('link', { name: /GitHub/i })).toHaveAttribute('href', aboutData.personalInfo.github);
  });
});
