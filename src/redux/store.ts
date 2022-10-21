import {configureStore} from '@reduxjs/toolkit';
import taskSlice from './states/tasks/taskSlice';
import {userSlice} from './states/user';

export interface AppStore {
    user: any;
}

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        tasks: taskSlice,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
