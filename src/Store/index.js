import { createStore, applyMiddleware } from "redux";
import createMiddlewareSaga from "redux-saga";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "Redux/Reducer";
import rootSagas from "Redux/Saga";

// setup middleware
const sagaMiddleware = createMiddlewareSaga();
const middleware = [sagaMiddleware, createLogger()];

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middleware))
);
sagaMiddleware.run(rootSagas);

export default store;
