import * as types from "../ActionTypes/GameListActionTypes";

const initalStore = {
  game: [],
  pages: null,
  nextPage: null,
  previous: null,
  loading: false,
  error: "",
};

export default function gameListReducer(store = initalStore, action) {
  switch (action.type) {
    case types.GET_GAMELIST_REQUEST:
      return { ...store, loading: true };
    case types.GET_GAMELIST_SUCCESS:
      return { ...store, loading: false, game: action.game };
    case types.GET_GAMELIST_FAIL:
      return { ...store, loading: false, error: action.error };
    default:
      return store;
  }
}
