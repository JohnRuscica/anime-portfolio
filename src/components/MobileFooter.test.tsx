import { render, screen } from '@testing-library/react';
import MobileFooter from './MobileFooter';

describe('MobileFooter', () => {
  it('renders GitHub and LinkedIn links', () => {
    render(<MobileFooter />);
    expect(screen.getByLabelText(/github/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/linkedin/i)).toBeInTheDocument();
  });
});
