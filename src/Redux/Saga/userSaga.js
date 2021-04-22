import _ from "lodash";
import { call, put, takeLatest } from "redux-saga/effects";
import TypeActions from "Redux/TypeActions";
import ServiceURL from "Service/ServiceURL";
import { DELETE, GET, PATCH, POST } from "../../Service/ServiceBase";

export function* getUser(data) {
  const url = ServiceURL.User + "/" + data.callback.idEdit;
  const callback = data.callback;
  try {
    const res = yield call(GET, url);
    if (res.message && !_.isEmpty(res.message)) {
      yield put({
        type: TypeActions.GET_USER_FAILED,
        error: res.message,
      });
    } else {
      yield put({
        type: TypeActions.GET_USER_SUCCESS,
        data: res.data,
      });
      callback && callback.success(res.data);
    }
  } catch (error) {
    yield put({ type: TypeActions.GET_USER_FAILED, error });
    callback && callback.failed(error.response.data.message);
  }
}

export function* deleteUser(data) {
  const url = ServiceURL.User + "/" + data.params;
  const callback = data.callback;
  try {
    const res = yield call(DELETE, url);

    if (res.message && !_.isEmpty(res.message)) {
      yield put({
        type: TypeActions.DELETE_USER_FAILED,
        error: res.message,
      });
      callback && callback.failed(res.error.response.data.message);
    } else {
      yield put({
        type: TypeActions.DELETE_USER_SUCCESS,
      });
      callback && callback.success();
    }
  } catch (error) {
    yield put({ type: TypeActions.DELETE_USER_FAILED, error });
    callback && callback.failed(error.response.data.message);
  }
}

export function* getListUsers(data) {
  const url = ServiceURL.User + "/searchUser?" + data.callback.detail;
  const callback = data.callback;
  try {
    const res = yield call(GET, url);

    if (res.message && !_.isEmpty(res.message)) {
      yield put({
        type: TypeActions.GET_LIST_USERS_FAILED,
        error: res.message,
      });
    } else {
      yield put({
        type: TypeActions.GET_LIST_USERS_SUCCESS,
        data: res,
      });
      callback && callback.success(res.data.result);
    }
  } catch (error) {
    yield put({ type: TypeActions.GET_LIST_USERS_FAILED, error });
  }
}

export function* createUser(data) {
  const url = ServiceURL.User;
  const callback = data.callback;
  try {
    const res = yield call(POST, url, data.body);
    if (res.message && !_.isEmpty(res.message)) {
      yield put({
        type: TypeActions.CREATE_USER_FAILED,
        error: res.message,
      });
      callback && callback.failed(res.error.response.data.message);
    } else {
      yield put({
        type: TypeActions.CREATE_USER_SUCCESS,
      });
      callback && callback.success();
    }
  } catch (error) {
    yield put({ type: TypeActions.CREATE_USER_FAILED, error });
    callback && callback.failed(error.response.data.message);
  }
}

export function* updateUser(data) {
  const url = ServiceURL.User + "/" + data.callback.idEdit;
  const callback = data.callback;
  try {
    const res = yield call(PATCH, url, data.body);
    if (res.message && !_.isEmpty(res.message)) {
      yield put({
        type: TypeActions.EDIT_USER_FAILED,
        error: res.message,
      });
      callback && callback.failed(res.error.response.data.message);
    } else {
      yield put({
        type: TypeActions.EDIT_USER_SUCCESS,
      });
      callback && callback.success(res);
    }
  } catch (error) {
    yield put({ type: TypeActions.EDIT_USER_FAILED, error });
    callback && callback.failed(error.response.data.message);
  }
}

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
  yield takeLatest(TypeActions.GET_USER_REQUEST, getUser);
  yield takeLatest(TypeActions.DELETE_USER_REQUEST, deleteUser);
  yield takeLatest(TypeActions.LOGIN_REQUEST, logIn);
  yield takeLatest(TypeActions.GET_LIST_USERS_REQUEST, getListUsers);
  yield takeLatest(TypeActions.CREATE_USER_REQUEST, createUser);
  yield takeLatest(TypeActions.UPDATE_USER_REQUEST, updateUser);
}
