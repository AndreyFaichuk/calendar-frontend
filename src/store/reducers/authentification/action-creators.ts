import { UserLogin, UserRegistraion } from "../../../models/User";
import { AuthActions } from "./actions";
import {
  LogoutUser,
  SetAuthAction,
  SetIsLoadingAction,
  SetLoginUser,
  SetRegistrationUser,
  VerifySession
} from "./types";

export const AuthActionCreators = {
  setIsAuth: (isAuth: boolean): SetAuthAction => ({ type: AuthActions.SET_AUTH, payload: isAuth }),
  setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
    type: AuthActions.SET_IS_LOADING,
    payload: isLoading
  }),
  setLoginUser: (data: UserLogin): SetLoginUser => ({
    type: AuthActions.SET_LOGIN_USER,
    payload: data
  }),
  setRegistrationUser: (data: UserRegistraion): SetRegistrationUser => ({
    type: AuthActions.SET_REGISTRATION_USER,
    payload: data
  }),
  verifySession: (): VerifySession => ({ type: AuthActions.VERIFY_SESSION }),
  logoutUser: (): LogoutUser => ({ type: AuthActions.LOGOUT_USER })
};
