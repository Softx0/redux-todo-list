import React, {Suspense} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import styled from 'styled-components';
import TaskForm from './components/Tasks/TaskForm';
import TaskList from './components/Tasks/TaskList';
import NotFound from './pages/404-NotFound/NotFound';
import {store} from './redux/store';

//Routes
// const Login = lazy(() => import('./pages/Login/Login'));
// const Task = lazy(() => import('./pages/Tasks/Task'));
export const LocationDisplay = () => {
    const location = useLocation();

    return (
        <div data-testid="location-display" style={{marginTop: '1rem'}}>
            This is the path right now: {location.pathname}
        </div>
    );
};

const App = () => {
    const Wrapper = styled.section`
        padding: 4em;
        background: #19181c;
    `;

    return (
        <React.StrictMode>
            <Wrapper>
                <Suspense fallback={<div>Loading ...</div>}>
                    <Provider store={store}>
                        <BrowserRouter>
                            <Routes>
                                <Route path="/" element={<TaskList />} />
                                <Route
                                    path="/create-task"
                                    element={<TaskForm />}
                                />
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
            </Wrapper>
        </React.StrictMode>
    );
};

export default App;
