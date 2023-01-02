import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {deleteTask} from '../../redux/states/tasks/taskSlice';

const TaskList = () => {
    const taskState = useAppSelector((state) => state.tasks);
    const dispatch = useAppDispatch();

    const handleDelete = (id: string) => {
        dispatch(deleteTask(id));
    };

    return (
        <div>
            <header>
                <h2>Task List</h2>
                <h3>No. of tasks right now - {taskState.length}</h3>
                <Link to={'/create-task'}>Create a Task</Link>
            </header>

            {taskState.map((task) => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>{task.completed.toString()}</p>
                    <button onClick={() => handleDelete(task.id)}>
                        Delete
                    </button>
                    <Link to={`/edit-task/${task.id}`}>Edit</Link>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
