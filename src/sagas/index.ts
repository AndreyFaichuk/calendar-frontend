import { fork } from "redux-saga/effects";
import authSaga from "./auth-saga";
import CalendarSaga from "./calendar-saga";
import updateUserSaga from "./update-user-saga";

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(updateUserSaga);
  yield fork(CalendarSaga);
}
