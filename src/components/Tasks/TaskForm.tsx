import React from 'react';
import {useSelector} from 'react-redux';

function TaskForm() {
    console.log('task form');

    const taskState = useSelector((state) => state);

    console.log(taskState);
    return <div>TaskForm</div>;
}

export default TaskForm;
