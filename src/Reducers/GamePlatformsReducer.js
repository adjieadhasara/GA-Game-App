import * as types from "../ActionTypes/GameListActionTypes";

const initalStore = {
  platforms: [],
  loading: false,
  error: "",
};

export default function gamePlatformsReducer(store = initalStore, action) {
  switch (action.type) {
    case types.GET_GAMEPLATFORMS_REQUEST:
      return { ...store, loading: true };
    case types.GET_GAMEPLATFORMS_SUCCESS:
      return { ...store, loading: false, platforms: action.platforms };
    case types.GET_GAMEPLATFORMS_FAIL:
      return { ...store, loading: false, error: action.error };
    default:
      return store;
  }
}
