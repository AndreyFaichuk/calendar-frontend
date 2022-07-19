import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { call, delay, put, takeLatest } from 'redux-saga/effects';

import { registrationUser } from '../../api/auth';
import { UserLogin, UserRegistraion } from '../../models/User';
import { loginService } from '../../services/loginService';
import { AuthActionCreators } from '../../store/reducers/authentification/action-creators';
import { AuthActions } from '../../store/reducers/authentification/actions';
import { UserActionCreators } from '../../store/reducers/user/action-creators';

export function* loginSaga(action: AnyAction) {
    try {
        const { password, username } = action.payload;

        yield put(AuthActionCreators.setIsLoading(true))

        yield delay(2000)
        const mockUser: UserRegistraion = yield call(loginService, password, username)

        if(mockUser){
            yield localStorage.setItem('isAuth', 'true')
            yield localStorage.setItem('username', mockUser.username)
            yield put(AuthActionCreators.setIsAuth(true))
            yield put(UserActionCreators.setUser(mockUser))
            toast.success('Successfully logged in!')
        } else {
            toast.error('User was not found!')
        }

        yield put(AuthActionCreators.setIsLoading(false))

    } catch (error) {
        toast.error('Authentication error!')

    }
}

export function* registrationSaga(action: AnyAction) {
    try {
        yield put(AuthActionCreators.setIsLoading(true))

        const { data }: UserRegistraion = yield call(registrationUser, action.payload)

        if(data){
            yield put(AuthActionCreators.setIsAuth(true))
            yield put(UserActionCreators.setUser(data))
            toast.success(data.message)
        }

        yield put(AuthActionCreators.setIsLoading(false))
        
    } catch (error) {
        toast.error('User already registered!')
    }
}

export function* logoutSaga() {
   yield localStorage.removeItem('isAuth')
   yield localStorage.removeItem('username')
   yield put(UserActionCreators.setUser({} as UserRegistraion))
   yield put(AuthActionCreators.setIsAuth(false))
}

export default function* authSaga() {
    yield takeLatest(AuthActions.SET_LOGIN_USER, loginSaga)
    yield takeLatest(AuthActions.SET_REGISTRATION_USER, registrationSaga)
    yield takeLatest(AuthActions.LOGOUT_USER, logoutSaga)
}