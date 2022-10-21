import TaskForm from '../../components/Tasks/TaskForm';
import TaskList from '../../components/Tasks/TaskList';
import {useAppSelector} from '../../hooks/useAppSelector';

export const Task = () => {
    //Old way, without hooks
    // const taskState = useSelector((state: RootState) => state.tasks);
    const taskState = useAppSelector((state) => state.tasks);

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
