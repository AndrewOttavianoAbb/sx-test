import '@testing-library/jest-dom';
import { MyComponent } from "./MyComponent";
import { screen, render } from '@testing-library/react';

describe('Button', () => {
  it('should have a transparent background', () => {
    render(<MyComponent />);
    const buttonElem = screen.getByText('Testing');
    expect(buttonElem).toHaveStyle({ 'background-color': 'transparent' });
  });
});