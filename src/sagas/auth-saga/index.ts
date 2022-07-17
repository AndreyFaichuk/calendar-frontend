import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { call, delay, put, takeLatest } from 'redux-saga/effects';

import { User } from '../../models/User';
import { loginService } from '../../services/loginService';
import { AuthActionCreators } from '../../store/reducers/authentification/action-creators';
import { AuthActions } from '../../store/reducers/authentification/actions';
import { UserActionCreators } from '../../store/reducers/user/action-creators';

export function* loginSaga(action: AnyAction) {
    try {
        const { password, username } = action.payload;

        yield put(AuthActionCreators.setIsLoading(true))

        yield delay(2000)
        const mockUser: User = yield call(loginService, password, username)

        yield put(AuthActionCreators.setIsLoading(false))

        if(mockUser){
            yield put(AuthActionCreators.setIsAuth(true))
            toast.success('Successfully logged in!')
            yield put(UserActionCreators.setUser(mockUser))
        } else {
            toast.error('User was not found!')
        }

    } catch (error) {
        toast.error('Authentication error!')

    }
    yield

}

export default function* authSaga() {
    yield takeLatest(AuthActions.SET_LOGIN_USER, loginSaga)
}