import TypeActions from "Redux/TypeActions";

const initialState = {
  account: {},
  listData: [],
  dataByID: {},
  error: "",
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    //!Get User
    case TypeActions.GET_USER_REQUEST:
      return {
        ...state,
      };
    case TypeActions.GET_USER_SUCCESS:
      return {
        ...state,
        dataByID: action.data,
      };
    case TypeActions.GET_USER_FAILED:
      return {
        ...state,
        error: action.error,
      };
    //!Delete User
    case TypeActions.DELETE_USER_REQUEST:
      return {
        ...state,
      };
    case TypeActions.DELETE_USER_SUCCESS:
      return {
        ...state,
        error: "",
      };
    case TypeActions.DELETE_USER_FAILED:
      return {
        ...state,
        error: action.error,
      };
    //!Get List User
    case TypeActions.GET_LIST_USERS_REQUEST:
      return {
        ...state,
      };
    case TypeActions.GET_LIST_USERS_SUCCESS:
      return {
        ...state,
        listData: action.data,
        error: "",
      };
    case TypeActions.GET_LIST_USERS_FAILED:
      return {
        ...state,
        error: action.error,
      };
    //!Create User
    case TypeActions.CREATE_USER_REQUEST:
      return {
        ...state,
      };
    case TypeActions.CREATE_USER_SUCCESS:
      return {
        ...state,
        error: "",
      };
    case TypeActions.CREATE_USER_FAILED:
      return {
        ...state,
        error: action.error,
      };
    //!Edit User
    case TypeActions.UPDATE_USER_REQUEST:
      return {
        ...state,
      };
    case TypeActions.UPDATE_USER_SUCCESS:
      return {
        ...state,
        error: "",
      };
    case TypeActions.UPDATE_USER_FAILED:
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
export default userReducer;
