import axios from 'axios';
import { UserLogin, UserRegistraion } from '../models/User';

export const loginUser = async (payload: UserLogin) => { 
  
  return await axios({
    headers: { 
      'Content-Type': 'application/json'
    },
    withCredentials: true,
    method: 'post',
    url: 'http://localhost:5000/users/login',
    data: payload,
  })
};

export const registrationUser = async (payload: UserRegistraion) => {

  return await axios({
      method: 'post',
      url: 'http://localhost:5000/users/registration',
      data: payload
  })
};

export const logoutUser = async () => {

  return await axios({
      method: 'get',
      withCredentials: true,
      url: 'http://localhost:5000/users/logout',
  })
};