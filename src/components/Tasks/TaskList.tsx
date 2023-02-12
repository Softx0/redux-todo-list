import {useAppDispatch} from '../../hooks/useAppDispatch';
import {useAppSelector} from '../../hooks/useAppSelector';
import ITask from '../../models/interfaces/task.model';
import {deleteTask} from '../../redux/states/tasks/taskSlice';
import {
    Button,
    ButtonLink,
    Paragraph,
    SubTitle,
    Title,
    Wrapper,
    WrapperContainerList,
    WrapperList,
} from '../../assets/styles/Task';

const TaskList = () => {
    const taskState = useAppSelector((state) => state.tasks);
    const dispatch = useAppDispatch();

    const handleDelete = (id: string) => {
        dispatch(deleteTask(id));
    };

    return (
        <div>
            <Wrapper>
                <Title color="white">Task List</Title>
                <SubTitle color="white" style={{textAlign: 'left'}}>
                    Number of tasks right now - {taskState.length}
                </SubTitle>
                <ButtonLink to={'/create-task'}>Create a Task</ButtonLink>
            </Wrapper>

            <WrapperContainerList>
                {taskState.map((task: ITask) => (
                    <WrapperList
                        key={task.id}
                        span={9}
                        style={{
                            backgroundColor: '#272627',
                            padding: '10px',
                            borderRadius: '10px',
                        }}>
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
                        <ButtonLink to={`/edit-task/${task.id}`}>
                            Edit
                        </ButtonLink>
                    </WrapperList>
                ))}
            </WrapperContainerList>
        </div>
    );
};

export default TaskList;
