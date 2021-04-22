import { all, fork } from "redux-saga/effects";
import userSaga from "./userSaga";

export function* rootSagas() {
  yield all([fork(userSaga)]);
}
export default rootSagas;
