import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { loadingReducer } from "./loadingReducer";

const rootReducers = combineReducers({
  userReducer,
  loadingReducer,
});
export default rootReducers;
