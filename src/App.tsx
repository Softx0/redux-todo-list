import React, {Suspense} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import TaskForm from './components/Tasks/TaskForm';
import TaskList from './components/Tasks/TaskList';
import NotFound from './pages/404-NotFound/NotFound';
import {store} from './redux/store';

//Routes
// const Login = lazy(() => import('./pages/Login/Login'));
// const Task = lazy(() => import('./pages/Tasks/Task'));
export const LocationDisplay = () => {
    const location = useLocation();

    return <div data-testid="location-display">{location.pathname}</div>;
};

const App = () => {
    return (
        <React.StrictMode>
            <Suspense fallback={<div>Loading ...</div>}>
                <Provider store={store}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<TaskList />} />
                            <Route path="/create-task" element={<TaskForm />} />
                            <Route
                                path="/edit-task/:id"
                                element={<TaskForm />}
                            />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                        <LocationDisplay />
                    </BrowserRouter>
                </Provider>
            </Suspense>
        </React.StrictMode>
    );
};

export default App;
