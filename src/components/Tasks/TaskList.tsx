import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import {deleteTask} from '../../redux/states/tasks/taskSlice';

function TaskList() {
    const taskState = useAppSelector((state) => state.tasks);
    const dispatch = useAppDispatch();

    const handleDelete = (id: string) => {
        dispatch(deleteTask(id));
    };

    return (
        <>
            <header>
                <h1>Task List</h1>
                <h3>No. of tasks right now - {taskState.length}</h3>
                <Link to={'/create-task'}> Create a Task</Link>
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
        </>
    );
}

export default TaskList;
