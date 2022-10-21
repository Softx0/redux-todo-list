import React, {lazy, Suspense} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {store} from './redux/store';

//Routes
// const Login = lazy(() => import('./pages/Login/Login'));
const Task = lazy(() => import('./pages/Tasks/Task'));

const App = () => {
    return (
        <React.StrictMode>
            <Suspense fallback={<div>Loading ...</div>}>
                <Provider store={store}>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Task />} />
                            <Route
                                path="home"
                                element={<Navigate to={`login`} />}
                            />
                        </Routes>
                    </BrowserRouter>
                </Provider>
            </Suspense>
        </React.StrictMode>
    );
};

export default App;
