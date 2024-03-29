import dayjs from 'dayjs';
import { AnyAction } from 'redux';
import { put, takeLeading } from 'redux-saga/effects';

import getMonth from '../../helpers/getMonth';
import { RootState } from '../../store';
import { CalendarActionCreators } from '../../store/reducers/calendar/action-creators';
import { CalendarActions } from '../../store/reducers/calendar/actions';

const stateSelector = (state: RootState) => ({
  monthIndex: state.calendar.monthIndex
});

type StateSelector = typeof stateSelector;

export function* setCurrentMonthSaga(action: AnyAction) {
  const monthIndex: number = action.payload;
  
  if(monthIndex === undefined){
    yield put(CalendarActionCreators.SetMonthIndex(dayjs().month()));
    yield put(CalendarActionCreators.SetSmallMonthIndex(dayjs().month()));
    yield put(CalendarActionCreators.setCurentMonth(getMonth(dayjs().month())));
  } else {
    yield put(CalendarActionCreators.SetMonthIndex(monthIndex));
    yield put(CalendarActionCreators.SetSmallMonthIndex(monthIndex));
    yield put(CalendarActionCreators.setCurentMonth(getMonth(monthIndex)));
  }
}

export function* setSmallMonthSaga(action: AnyAction) {
  const monthIndex: number = action.payload;
    yield put(CalendarActionCreators.SetSmallMonthIndex(monthIndex));
}

export default function* CalendarSaga() {
  yield takeLeading(CalendarActions.SET_CALENDAR_MONTH, setCurrentMonthSaga);
  yield takeLeading(CalendarActions.SET_SMALL_CALENDAR_MONTH_INDEX, setSmallMonthSaga);
}
