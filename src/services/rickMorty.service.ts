import axios from 'axios';
import {User} from '../models/interfaces/user.model';
import {loadAbort} from '../utils/helpers/load-abort-axios.utility';

export const login = () => {
    const URL_BASE = `${process.env.REACT_APP_API_URL}`;
    const controller = loadAbort();
    return {
        call: axios.get<User>(URL_BASE, {signal: controller.signal}),
        controller,
    };
};
