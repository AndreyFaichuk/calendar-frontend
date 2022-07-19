import axios from 'axios';
import { UserLogin, UserRegistraion } from '../models/User';

export const loginUser = (payload: UserLogin) => {
    axios({
        method: 'post',
        url: '/user/12345',
        data: {
          firstName: 'Fred',
          lastName: 'Flintstone'
        }
      })
};

export const registrationUser = async (payload: UserRegistraion) => {

    return await axios({
        method: 'post',
        url: 'http://localhost:5000/users/registration',
        data: payload
      })
};