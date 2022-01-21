import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import App from './App';

describe('Click button', () => {
  render(<App />);
  fireEvent.click(screen.getByTestId("Button"));

  test('Text should be shown', () => {
    expect(screen.getByTestId('Text')).toHaveTextContent('CircleCI');
  });
});
