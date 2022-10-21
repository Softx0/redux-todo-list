import {createSlice} from '@reduxjs/toolkit';

export const taskEmptyState = [
    {
        id: '1',
        title: 'task 1',
        description: 'task 1 description',
        completed: false,
    },
    {
        id: '2',
        title: 'task 2',
        description: 'task 2 description',
        completed: false,
    },
];

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: taskEmptyState,
    reducers: {
        createTask: (state, action) => {
            // state.push(action.payload);
            return [...state, action.payload];
        },
    },
});

export const {createTask} = taskSlice.actions;

export default taskSlice.reducer;
