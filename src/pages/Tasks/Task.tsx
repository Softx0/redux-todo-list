import TaskForm from '../../components/Tasks/TaskForm';
import TaskList from '../../components/Tasks/TaskList';
// import {useAppSelector} from '../../hooks/useAppSelector';

export const Task = () => {
    //Old way, without hooks
    // const taskState = useSelector((state: RootState) => state.tasks);
    // With custom hooks
    // const taskState = useAppSelector((state) => state.tasks)

    return (
        <div>
            <h1>TODO LIST</h1>
            <TaskForm />
            <TaskList />
        </div>
    );
};

export default Task;
