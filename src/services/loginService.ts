import axios from 'axios';
import { UserLogin } from '../models/User';

export const loginService = async (password: string, username: string) => {
    const { data } = await axios.get<UserLogin[]>('./users.json')
    return data.find(user => user.password === password && user.username === username)
};