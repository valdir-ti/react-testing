import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {

  it('should render App correctly', () => {
    render(<App />);
    const title = screen.getByText(/React Testing/i);
    expect(title).toBeInTheDocument();
  })

});
