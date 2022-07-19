import { UserLogin, UserRegistraion } from '../../../models/User';
import { AuthActions } from './actions';

export interface AuthentificationState{
    isAuth: boolean;
    isLoading: boolean;
};

export interface SetAuthAction{
    type: AuthActions.SET_AUTH;
    payload: boolean;
};
export interface SetIsLoadingAction{
    type: AuthActions.SET_IS_LOADING;
    payload: boolean;
};
export interface SetLoginUser{
    type: AuthActions.SET_LOGIN_USER;
    payload: UserLogin
};

export interface SetRegistrationUser{
    type: AuthActions.SET_REGISTRATION_USER;
    payload: UserRegistraion
};

export interface LogoutUser{
    type: AuthActions.LOGOUT_USER;
};

export type AuthAction = 
SetAuthAction  | SetIsLoadingAction  | SetLoginUser | LogoutUser