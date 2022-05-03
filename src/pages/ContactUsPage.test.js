import { render, screen } from '@testing-library/react';
import ContactUsPage from './ContactUsPage.js';


// test the link that refer to Find os København
test('renders Find os København text', () => {
  render(<ContactUsPage />);
  const linkElement = screen.getByText(/Find os København/i); // /Find os København/i : this is because it is regular expression that makes it case insensitive.
  expect(linkElement).toHaveTextContent;
});
