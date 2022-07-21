import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { call, put, takeLatest } from 'redux-saga/effects';
import Cookies from 'universal-cookie';

import { loginUser, logoutUser, registrationUser } from '../../api/auth';
import { UserData, UserLogin, UserRegistraion } from '../../models/User';
import { AuthActionCreators } from '../../store/reducers/authentification/action-creators';
import { AuthActions } from '../../store/reducers/authentification/actions';
import { UserActionCreators } from '../../store/reducers/user/action-creators';

const cookies = new Cookies();

export function* loginSaga(action: AnyAction) {
    try {
        yield put(AuthActionCreators.setIsLoading(true))

        const { data }: UserData = yield call(loginUser, action.payload)

        if(data){
            yield put(AuthActionCreators.setIsAuth(true))
            yield put(UserActionCreators.setUser(data))
            toast.success(data.message)
        }

    } catch (error) {
        toast.error('User not found!')
    }
    yield put(AuthActionCreators.setIsLoading(false))
}

export function* registrationSaga(action: AnyAction) {
    try {
        yield put(AuthActionCreators.setIsLoading(true))

        const { data }: UserRegistraion = yield call(registrationUser, action.payload)

        if(data){
            toast.success(data.message)
        }

        yield put(AuthActionCreators.setIsLoading(false))
        
    } catch (error) {
        toast.error('Already registered!')
    }
		yield put(AuthActionCreators.setIsLoading(false))
}

export function* logoutSaga() {
		yield put(AuthActionCreators.setIsLoading(true))
		const result: UserData = yield call(logoutUser)
		toast.success(result.data.message)
		cookies.remove('connect.sid')
		yield put(AuthActionCreators.setIsLoading(false))
		yield put(UserActionCreators.setUser({ username: '', email: '', userId: '' }))
		yield put(AuthActionCreators.setIsAuth(false))
}

export default function* authSaga() {
    yield takeLatest(AuthActions.SET_LOGIN_USER, loginSaga)
    yield takeLatest(AuthActions.SET_REGISTRATION_USER, registrationSaga)
    yield takeLatest(AuthActions.LOGOUT_USER, logoutSaga)
}