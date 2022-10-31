import {render, screen, waitFor} from '@testing-library/react';
import {Provider} from 'react-redux';
import App from '../../App';
import {store} from '../../redux/store';

const renderWithRedux = async (component: any) => {
    render(<Provider store={store}>{component}</Provider>);
};

test('should render the button Create new task', () => {
    renderWithRedux(<App />);
    const textElement = screen.getByText(/Create a Task/i);
    expect(textElement).toBeInTheDocument();
});

test('should click on the button Create new task', async () => {
    renderWithRedux(<App />);
    const textElement = screen.getByText(/Create a Task/i);
    expect(textElement).toBeInTheDocument();

    await waitFor(() => {
        textElement.click();
    });
});

test('should render the correct title when press button Create new task', async () => {
    renderWithRedux(<App />);

    const title = screen.getByText(/Create task/i);
    expect(title).toBeInTheDocument();
});
