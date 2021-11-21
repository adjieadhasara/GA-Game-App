import * as types from "../ActionTypes/GameListActionTypes";
import axios from "axios";
import Swal from "sweetalert2";

export function gamesDetails(id, slug, pages, platforms, genre) {
  return (dispatch) => {
    dispatch({ type: types.GET_GAMEDETAILS_REQUEST });

    axios({
      method: "GET",
      url: `/games/${id}?key=8fbbb416b9ce4c4e80d04e11185e921e&slug`,
    })
      .then((response) => {
        let gameDet = response.data;
        // console.log(gameDet);
        dispatch({
          type: types.GET_GAMEDETAILS_SUCCESS,
          detail: gameDet,
        });

        if (gameDet && !gameDet.length) {
          //   return Swal.fire({
          //     icon: "success",
          //     title: "Loading Page Success....",
          //   });
        }
      })
      .catch((err) => {
        dispatch({ type: types.GET_GAMEDETAILS_FAIL, error: err });
        Swal.fire({
          icon: "error",
          title: "Error.....",
        });
      });
  };
}
