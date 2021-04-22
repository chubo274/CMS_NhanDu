const initialState = {
  type: "",
  isLoading: false,
  errorMessage: "",
  sidebarShow: "responsive",
};

export const loadingReducer = (state = initialState, action) => {
  state.type = action.type;
  if (action.type.includes("_REQUEST")) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type.includes("_FAILED")) {
    return {
      ...state,
      isLoading: false,
      errorMessage: action.error,
    };
  }

  if (action.type === "set") {
    return {
      ...state,
      isLoading: false,
      sidebarShow: action.sidebarShow,
    };
  }

  return {
    ...state,
    isLoading: false,
  };
};
