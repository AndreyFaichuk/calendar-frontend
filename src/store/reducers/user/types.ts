import { UserRegistraion } from '../../../models/User';
import { UserActions } from './actions';

export interface UserState{
    email?: string;
    username: string;
};

export interface SetUserInfoAction{
    type: UserActions.SET_USER_INFO;
    payload: UserRegistraion;
};

export type UserAction = 
SetUserInfoAction 