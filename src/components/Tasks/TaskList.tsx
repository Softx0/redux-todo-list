import {useAppSelector} from '../../hooks/useAppSelector';

function TaskList() {
    const taskState = useAppSelector((state) => state.tasks);

    return (
        <>
            <h1>Task List</h1>

            {taskState.map((task) => (
                <div key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                </div>
            ))}
        </>
    );
}

export default TaskList;
