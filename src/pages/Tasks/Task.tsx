import {useSelector} from 'react-redux';
import TaskForm from '../../components/Tasks/TaskForm';
import TaskList from '../../components/Tasks/TaskList';

export const Task = () => {
    const taskState = useSelector((state) => state);

    console.log(taskState);

    return (
        <div>
            Task
            <TaskForm />
            <TaskList />
        </div>
    );
};

export default Task;
