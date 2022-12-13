import {render, screen, waitFor} from '@testing-library/react';
import App from '../../App';

describe('TaskList - Edit Component', () => {
    beforeEach(() => {
        render(<App />);
    });

    it('should render the button Edit new task', async () => {
        const btnEditTask = screen.getByText(/Edit/i);

        expect(btnEditTask).toBeInTheDocument();
        await waitFor(() => btnEditTask.click());
    });

    it('should render the Component Edit Task with the initial Title', async () => {
        expect(screen.getByText(/Edit Task/i)).toBeInTheDocument();
    });
});

export {};
