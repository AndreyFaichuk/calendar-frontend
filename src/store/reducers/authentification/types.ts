import { AuthActions } from './actions';

export interface AuthentificationState{
    isAuth: boolean;
};

export interface SetAuthAction{
    type: AuthActions.SET_AUTH;
    payload: boolean;
};


export type AuthAction = SetAuthAction