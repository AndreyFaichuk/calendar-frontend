import { AuthActions } from './actions';
import { SetAuthAction, SetIsLoadingAction, SetLoginUser } from './types';

export const AuthActionCreators = {
    setIsAuth: (isAuth: boolean): SetAuthAction => ({ type: AuthActions.SET_AUTH, payload: isAuth}),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({ type: AuthActions.SET_IS_LOADING, payload: isLoading}),
    setLoginUser: (data: object): SetLoginUser => ({type: AuthActions.SET_LOGIN_USER, payload: data})
};