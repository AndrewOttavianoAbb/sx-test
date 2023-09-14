import '@testing-library/jest-dom';
import { matchers } from '@emotion/jest';
import { MyComponent } from "./MyComponent";
import { screen, render } from '@testing-library/react';

expect.extend(matchers);

describe('Button', () => {
  it('should have a transparent background', () => {
    render(<MyComponent />);
    const buttonElem = screen.getByText('Testing');
    expect(buttonElem).toHaveStyleRule('background-color', 'transparent');
  });
});
