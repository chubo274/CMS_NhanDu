import TypeActions from "Redux/TypeActions";

export const getUser = (callback) => {
  return {
    type: TypeActions.GET_USER_REQUEST,
    callback,
  };
};

export const deleteUser = (params, callback) => {
  return {
    type: TypeActions.DELETE_USER_REQUEST,
    params,
    callback,
  };
};

export const getListUsers = (callback) => {
  return {
    type: TypeActions.GET_LIST_USERS_REQUEST,
    callback,
  };
};

export const createUser = (body, callback) => {
  return {
    type: TypeActions.CREATE_USER_REQUEST,
    body,
    callback,
  };
};

export const updateUser = (body, callback) => {
  return {
    type: TypeActions.UPDATE_USER_REQUEST,
    body,
    callback,
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getUser,
  getListUsers,
  createUser,
  updateUser,
  deleteUser,
};
