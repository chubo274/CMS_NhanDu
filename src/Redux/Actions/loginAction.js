import TypeActions from "Redux/TypeActions";

export const login = (body, callback) => {
  return {
    type: TypeActions.LOGIN_REQUEST,
    body,
    callback,
  };
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
};
