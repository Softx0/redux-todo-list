import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';

test('renders learn react text', () => {
    render(<App />);
    const textElement = screen.getByText(/Task List/i);
    expect(textElement).toBeInTheDocument();
});
