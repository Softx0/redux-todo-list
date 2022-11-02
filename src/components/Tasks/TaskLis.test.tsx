import {render, screen, waitFor} from '@testing-library/react';
import {Provider} from 'react-redux';
import App from '../../App';
import {store} from '../../redux/store';

const renderWithRedux = async (component: any) => {
    render(<Provider store={store}>{component}</Provider>);
};

// const renderWithRouter = (ui: any, {route = '/'} = {}) => {
//     window.history.pushState({}, 'Test page', route);

//     return {
//         user: userEvent.setup(),
//         ...render(ui, {wrapper: BrowserRouter}),
//     };
// };

describe('TaskList - Button Create New Task', () => {
    beforeEach(() => {
        renderWithRedux(<App />);
    });

    it('should render the task list', async () => {
        await waitFor(() => screen.getByText('Task List'));
        expect(screen.getByText('Task List')).toBeInTheDocument();
    });

    it('should render the button Create new task', () => {
        const textElement = screen.getByText(/Create a Task/i);
        expect(textElement).toBeInTheDocument();
    });

    it('should click on the button Create new task', async () => {
        const textElement = screen.getByText(/Create a Task/i);
        expect(textElement).toBeInTheDocument();

        await waitFor(() => {
            textElement.click();
        });
    });

    it('should render the correct title when press button Create new task', async () => {
        const title = screen.getByText(/Create task/i);
        expect(title).toBeInTheDocument();
    });
});
