import * as types from "../ActionTypes/GameListActionTypes";
import axios from "axios";
import Swal from "sweetalert2";

export function gamesListAction(pages) {
  return (dispatch) => {
    dispatch({ type: types.GET_GAMELIST_REQUEST });

    axios({
      method: "GET",
      url: `/games?key=8fbbb416b9ce4c4e80d04e11185e921e&page=${pages}`,
    })
      .then((response) => {
        let result = response.data.results;
        // console.log(result, "haybro");
        dispatch({ type: types.GET_GAMELIST_SUCCESS, game: result });
        if (result && result.length) {
          return Swal.fire({
            icon: "success",
            title: "Loading Page Success....",
          });
        }
      }, [])
      .catch((err) => {
        dispatch({ type: types.GET_GAMELIST_FAIL, error: err });
        Swal.fire({
          icon: "error",
          title: "Error.....",
        });
      });
  };
}
