import {useState} from 'react';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {createTask} from '../../redux/states/tasks/taskSlice';
import {v4 as uuid} from 'uuid';

function TaskForm() {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    });

    const dispatch = useAppDispatch();

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        dispatch(
            createTask({
                ...formData,
                id: uuid(),
                completed: false,
            })
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                placeholder="title"
                onChange={handleChange}
            />

            <textarea
                name="description"
                id="description"
                cols={30}
                rows={10}
                onChange={handleChange}
            />

            <button>Save</button>
        </form>
    );
}

export default TaskForm;
