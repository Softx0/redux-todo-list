import {useEffect, useState} from 'react';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {createTask, updateTask} from '../../redux/states/tasks/taskSlice';
import {v4 as uuid} from 'uuid';
import {useNavigate, useParams} from 'react-router-dom';
import {useAppSelector} from '../../hooks/useAppSelector';
import ITask from '../../models/interfaces/task.model';

function TaskForm() {
    const INITIAL_STATE_TASK = {
        id: '',
        title: '',
        description: '',
        completed: false,
    };

    const [formData, setFormData] = useState<ITask>(INITIAL_STATE_TASK);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const selector = useAppSelector((state) => state.tasks);
    const getParam = useParams();

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if (getParam.id) {
            dispatch(updateTask(formData));
        } else {
            dispatch(
                createTask({
                    ...formData,
                    id: uuid(),
                    completed: false,
                })
            );
        }

        navigate('/');
    };

    useEffect(() => {
        if (getParam.id) {
            const newState = selector.find(
                (task: ITask) => task.id == getParam.id
            );
            // setFormData(newState!); //another way to ommmit the undefined or null error
            setFormData(newState ?? INITIAL_STATE_TASK);
        }
    }, []);

    return (
        <div>
            <h1>{getParam.id ? 'Edit Task' : 'Create Task'}</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    placeholder="title"
                    onChange={handleChange}
                    value={formData.title}
                />

                <textarea
                    name="description"
                    id="description"
                    cols={30}
                    rows={4}
                    onChange={handleChange}
                    value={formData.description}
                />

                <button>Save</button>
            </form>
        </div>
    );
}

export default TaskForm;
