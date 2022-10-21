import {createSlice} from '@reduxjs/toolkit';

export const taskEmptyState = [];

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: taskEmptyState,
    reducers: {},
});

export default taskSlice.reducer;
