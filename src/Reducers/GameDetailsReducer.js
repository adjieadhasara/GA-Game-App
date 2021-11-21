import * as types from "../ActionTypes/GameListActionTypes";

const initalStore = {
  detail: [],
  loading: false,
  error: "",
};

export default function gameDetailsReducer(store = initalStore, action) {
  switch (action.type) {
    case types.GET_GAMEDETAILS_REQUEST:
      return { ...store, loading: true };
    case types.GET_GAMEDETAILS_SUCCESS:
      return { ...store, loading: false, detail: action.detail };
    case types.GET_GAMEDETAILS_FAIL:
      return { ...store, loading: false, error: action.error };
    default:
      return store;
  }
}
