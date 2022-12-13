import {render, screen, waitFor} from '@testing-library/react';
import {Provider} from 'react-redux';
import App from '../../App';
import {store} from '../../redux/store';

const renderWithRedux = async (component: any) => {
    render(<Provider store={store}>{component}</Provider>);
};

const mockdUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockdUsedNavigate,
}));

// const createRouterWrapper =
//     (history: unknown) =>
//     ({children}) =>
//         <Router history={history}>{children}</Router>;

describe('TaskList - Component', () => {
    beforeEach(() => {
        render(<App />);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should render the correct initial state from task list', async () => {
        expect(
            screen.getByText(/No. of tasks right now - 1/i)
        ).toBeInTheDocument();
    });

    it('should render the button Create new task', () => {
        //One way to test the button with react router | more generic
        // expect(screen.getByText(/Create a Task/i)).toBeInTheDocument();

        //Another way to test with react router cause we use Link | more specific
        expect(
            screen.getByRole('link', {name: /Create a Task/i})
        ).toBeInTheDocument();
    });
});

describe('TaskList - Button Delete a Task', () => {
    beforeEach(() => {
        renderWithRedux(<App />);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should render the button Delete a Task', () => {
        const textElement = screen.getByText(/Delete/i);
        expect(textElement).toBeInTheDocument();
    });

    it('should click on the button Delete a Task', async () => {
        const textElement = screen.getByText(/Delete/i);
        expect(textElement).toBeInTheDocument();

        await waitFor(() => {
            textElement.click();
        });
    });
});

describe('TaskList - Create a Task button', () => {
    beforeEach(() => {
        render(<App />);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should click on the button Create new task', async () => {
        const btnCreateTask = screen.getByRole('link', {
            name: /Create a Task/i,
        });
        expect(btnCreateTask).toBeInTheDocument();
        await waitFor(() => {
            btnCreateTask.click();
        });
    });

    it('should render the correct title when press button Create new task', async () => {
        const title = screen.getByText(/Create task/i);
        expect(title).toBeInTheDocument();
    });

    it('should have the correct pathname', () => {
        expect(window.location.pathname).toBe('/create-task');
    });
});

describe('TaskList - Edit a Task button', () => {
    it.todo('should click on the button Edit a Task');
});
