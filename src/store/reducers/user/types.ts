import { User } from '../../../models/User';
import { UserActions } from './actions';

export interface UserState{
    email?: string;
    username: string;
};

export interface SetUserInfoAction{
    type: UserActions.SET_USER_INFO;
    payload: User;
};

export type UserAction = 
SetUserInfoAction 