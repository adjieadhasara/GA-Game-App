import * as types from "../ActionTypes/GameListActionTypes";

const initalStore = {
  game: [],
  genresGameFilters: [],
  pages: null,
  // detail: [],
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
    case types.GET_GAMESFILTER_REQUEST:
      return { ...store, loading: true };
    case types.GET_GAMESFILTER_SUCCESS:
      return {
        ...store,
        loading: false,
        genresGameFilters: action.genresGameFilters,
      };
    case types.GET_GAMESFILTER_FAIL:
      return { ...store, loading: false, error: action.error };
    default:
      return store;
  }
}
