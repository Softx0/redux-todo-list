import {createSlice} from '@reduxjs/toolkit';
import ITask from '../../../models/interfaces/task.model';

export const taskEmptyState: ITask[] = [
    {
        id: '1',
        title: 'task 1',
        description: 'task 1 description',
        completed: false,
    },
];

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: taskEmptyState,
    reducers: {
        createTask: (state, action) => {
            // state.push(action.payload);`
            return [...state, action.payload];
        },
        deleteTask: (state, action) => {
            const taskFound = state.find((task) => task.id === action.payload);
            if (taskFound) {
                state.splice(state.indexOf(taskFound), 1);
            }
        },
        updateTask: (state, action) => {
            const {id, title, description} = action.payload;
            const taskFound = state.find((task) => task.id === id);
            if (taskFound) {
                taskFound.title = title;
                taskFound.description = description;
            }
        },
    },
});

export const {createTask, deleteTask, updateTask} = taskSlice.actions;

export default taskSlice.reducer;
