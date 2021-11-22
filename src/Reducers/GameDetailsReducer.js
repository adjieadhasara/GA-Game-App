import * as types from "../ActionTypes/GameListActionTypes";

const initalStore = {
  detail: [],
  genre: [],
  platformName: [],
  developer: [],
  loading: false,
  error: "",
};

export default function gameDetailsReducer(store = initalStore, action) {
  switch (action.type) {
    case types.GET_GAMEDETAILS_REQUEST:
      return { ...store, loading: true };
    case types.GET_GAMEDETAILS_SUCCESS:
      return {
        ...store,
        loading: false,
        detail: action.detail,
        developer: action.developer,
        genre: action.genre,
        platformName: action.platformName,
      };
    case types.GET_GAMEDETAILS_FAIL:
      return { ...store, loading: false, error: action.error };
    // case types.GET_GAMEGENRES_REQUEST:
    //   return { ...store, loading: true };
    // case types.GET_GAMEGENRES_SUCCESS:
    //   return { ...store, loading: false, genre: action.genre };
    // case types.GET_GAMEGENRES_FAIL:
    //   return { ...store, loading: false, error: action.error };
    // case types.GET_GAMEPLATFORMSNAME_REQUEST:
    //   return { ...store, loading: true };
    // case types.GET_GAMEPLATFORMSNAME_SUCCESS:
    //   return { ...store, loading: false, platformName: action.platformName };
    // case types.GET_GAMEPLATFORMSNAME_FAIL:
    //   return { ...store, loading: false, error: action.error };
    default:
      return store;
  }
}
