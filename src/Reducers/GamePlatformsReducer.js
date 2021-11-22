import * as types from "../ActionTypes/GameListActionTypes";

const initalStore = {
  genresList: [],
  filterPages: null,
  loading: false,
  error: "",
};

export default function gamesGenreListReducer(store = initalStore, action) {
  switch (action.type) {
    case types.GET_GAMESGENRELIST_REQUEST:
      return { ...store, loading: true };
    case types.GET_GAMESGENRELIST_SUCCESS:
      return { ...store, loading: false, genresList: action.genresList };
    case types.GET_GAMESGENRELIST_FAIL:
      return { ...store, loading: false, error: action.error };
    default:
      return store;
  }
}
