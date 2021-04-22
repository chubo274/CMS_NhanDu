import TypeActions from "Redux/TypeActions";

const initialState = {
  account: {},
  error: "",
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    //!Login
    case TypeActions.LOGIN_REQUEST:
      return {
        ...state,
      };
    case TypeActions.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        error: "",
        account: action.data,
      };
    case TypeActions.LOGIN_REQUEST_FAILED:
      return {
        ...state,
        error: action.error,
      };
    //!Default
    default:
      return {
        ...state,
      };
  }
};
export default adminReducer;
