import { fork } from "redux-saga/effects";
import authSaga from "./auth-saga";
import updateUserSaga from "./update-user-saga";

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(updateUserSaga)
}
