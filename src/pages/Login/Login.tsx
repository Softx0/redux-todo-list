/* eslint-disable no-unused-vars */
import {Button} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {createUserAdapter} from '../../adapters';
import {useFetchAndLoad} from '../../hooks';
import {createUser, modifyUser} from '../../redux/states/user';
import {AppStore} from '../../redux/store';
import {login} from '../../services';

export const Login = () => {
    const {loading, callEndpoint} = useFetchAndLoad();
    //Esta es la manera con redux, obtener la data del estado dentro de la aplicacion,
    //Cuando se modifique se va a actualizar.
    const userState = useSelector((store: AppStore) => store.user);
    const stateModifyName = {
        name: 'Gentleman',
    };
    const dispatch = useDispatch();
    const handleLogin = async () => {
        const morty = await callEndpoint(login());
        dispatch(createUser(createUserAdapter(morty)));
    };
    const handleModify = async () => {
        dispatch(modifyUser(stateModifyName));
    };

    return (
        <>
            {loading ? (
                <div>
                    <h3>LOADING...</h3>
                </div>
            ) : (
                <div>
                    <Button variant="text" onClick={handleLogin}>
                        GET ME MORTY!
                    </Button>
                    <Button variant="text" onClick={handleModify}>
                        MODIFY MORTY!
                    </Button>
                    <div>
                        <div>{JSON.stringify(userState)}</div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Login;
