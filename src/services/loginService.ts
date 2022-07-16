import axios from 'axios';
import { User } from '../models/User';

export const loginService = async (password: string, username: string) => {
    const { data } = await axios.get<User[]>('./users.json')
    return data.find(user => user.password === password && user.username === username)
};