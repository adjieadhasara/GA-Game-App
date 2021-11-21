import React from "react";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { Provider } from "react-redux";
import gameListReducer from "../Reducers/GameListReducer";
import gameDetailsReducer from "../Reducers/GameDetailsReducer";
import gamePlatformsReducer from "../Reducers/GamePlatformsReducer";

const enhancer = compose(
  applyMiddleware(thunkMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootReducer = combineReducers({
  // put all of your reducers in here
  game: gameListReducer,
  detail: gameDetailsReducer,
  platforms: gamePlatformsReducer,
});

const reduxStore = createStore(rootReducer, enhancer);

const ReduxProvider = (props) => {
  return <Provider store={reduxStore}>{props.children}</Provider>;
};

export default ReduxProvider;
