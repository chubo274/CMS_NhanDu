import _ from "lodash";
import { call, put, takeLatest } from "redux-saga/effects";
import TypeActions from "Redux/TypeActions";
import ServiceURL from "Service/ServiceURL";
import { POST } from "../../Service/ServiceBase";

export function* logIn(data) {
  const url = ServiceURL.Login;
  const callback = data.callback;
  try {
    const res = yield call(POST, url, data.body);

    if (res.message && !_.isEmpty(res.message)) {
      yield put({ type: TypeActions.LOGIN_REQUEST_FAILED, error: res.message });
      callback && callback.failed(res.message);
    } else {
      yield put({
        type: TypeActions.LOGIN_REQUEST_SUCCESS,
        data: res.data.user,
      });
      localStorage.setItem("expiresAt", res.data.tokens.access.expires);
      localStorage.setItem("token", res.data.tokens.access.token);
      localStorage.setItem("refreshtoken", res.data.tokens.refresh.token);
      localStorage.setItem("role", res.data.user.role);
      localStorage.setItem("id", res.data.user.id);
      callback && callback.success();
    }
  } catch (error) {
    yield put({
      type: TypeActions.LOGIN_REQUEST_FAILED,
      error: error.response.data.message,
    });
    callback && callback.failed(error.response.data.message);
  }
}

export default function* userSaga() {
  yield takeLatest(TypeActions.LOGIN_REQUEST, logIn);
}
