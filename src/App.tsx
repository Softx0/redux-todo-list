import React, {Suspense} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import TaskForm from './components/Tasks/TaskForm';
import TaskList from './components/Tasks/TaskList';
import {store} from './redux/store';

//Routes
// const Login = lazy(() => import('./pages/Login/Login'));
// const Task = lazy(() => import('./pages/Tasks/Task'));

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
                        </Routes>
                    </BrowserRouter>
                </Provider>
            </Suspense>
        </React.StrictMode>
    );
};

export default App;
