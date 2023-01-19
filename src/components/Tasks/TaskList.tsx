import {Link} from 'react-router-dom';
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import ITask from '../../models/interfaces/task.model';
import {deleteTask} from '../../redux/states/tasks/taskSlice';
import styled from 'styled-components';
import {Button} from '../../assets/styles/Task';

const TaskList = () => {
    const taskState = useAppSelector((state) => state.tasks);
    const dispatch = useAppDispatch();

    const handleDelete = (id: string) => {
        dispatch(deleteTask(id));
    };

    const Wrapper = styled.header`
        background: #19181c;
        margin: 0em 0em 4em 0em;
    `;

    const Title = styled.h2`
        color: ${(props) => props.color};
        text-align: center;
    `;

    const SubTitle = styled.h3`
        color: ${(props) => props.color};
    `;

    const ButtonLink = styled(Link)`
        padding: 0.5em 1em;
        border: 2px;
        background: #5247d0;
        color: white;
        border-radius: 5px;
    `;

    // const Button = styled.button`
    //     padding: 0.5em 1em;
    //     border: 2px;
    //     background: #5247d0;
    //     color: white;
    //     border-radius: 5px;
    // `;

    const Paragraph = styled.p`
        color: ${(props) => props.color};
    `;

    return (
        <div>
            <Wrapper>
                <Title color="white">Task List</Title>
                <SubTitle color="white" style={{textAlign: 'left'}}>
                    Number of tasks right now - {taskState.length}
                </SubTitle>
                <ButtonLink to={'/create-task'}>Create a Task</ButtonLink>
            </Wrapper>

            {taskState.map((task: ITask) => (
                <div key={task.id}>
                    <SubTitle color="white" style={{textAlign: 'left'}}>
                        {String(task.title).toUpperCase()}
                    </SubTitle>
                    <Paragraph color="white" style={{textAlign: 'left'}}>
                        Descripción: {task.description}
                    </Paragraph>
                    <Paragraph color="white" style={{textAlign: 'left'}}>
                        Completada: {task.completed ? 'Sí' : 'No'}
                    </Paragraph>
                    <Button
                        onClick={() => handleDelete(task.id)}
                        style={{marginRight: '10px'}}>
                        Delete
                    </Button>
                    <ButtonLink to={`/edit-task/${task.id}`}>Edit</ButtonLink>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
