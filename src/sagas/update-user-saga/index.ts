import { toast } from 'react-toastify';
import { AnyAction } from 'redux';
import { call, put, takeEvery } from 'redux-saga/effects';
import { updateUser } from '../../api/updateUser';
import { AuthActionCreators } from '../../store/reducers/authentification/action-creators';
import { UserActionCreators } from '../../store/reducers/user/action-creators';
import { UserActions } from '../../store/reducers/user/actions';
import { UserState } from '../../store/reducers/user/types';

export function* updateSaga(action: AnyAction) {
    try {
			yield put(AuthActionCreators.setIsLoading(true))
			const { data }: UserState = yield call(updateUser, action.payload);
			
			if (data) {
				yield put(AuthActionCreators.setIsAuth(true));
				yield put(UserActionCreators.setUser(data));
				toast.success('User data has been updated!');
			}
    } catch (error) {
			toast.error('Something went wrong!');
    }
		yield put(AuthActionCreators.setIsLoading(false));
}


export default function* updateUserSaga() {
	yield takeEvery(UserActions.UPDATE_USER, updateSaga);
}
