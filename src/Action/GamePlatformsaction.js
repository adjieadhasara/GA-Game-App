import * as types from "../ActionTypes/GameListActionTypes";
import axios from "axios";
import Swal from "sweetalert2";

export function gamesPlatforms(id, slug, page, platforms, genre) {
  return (dispatch) => {
    dispatch({ type: types.GET_GAMEPLATFORMS_REQUEST });

    axios({
      method: "GET",
      url: `/genres?key=${process.env.REACT_APP_GAMES_API_KEY}`,
    })
      .then((response) => {
        let gamesPlatform = response.data.results;
        // console.log(response.data.results, "platform njing");
        dispatch({
          type: types.GET_GAMEPLATFORMS_SUCCESS,
          platforms: gamesPlatform,
        });

        // if (gameDet && !gameDet.length) {
        //   return Swal.fire({
        //     icon: "success",
        //     title: "Loading Page Success....",
        //   });
        // }
      })
      .catch((err) => {
        dispatch({ type: types.GET_GAMEPLATFORMS_FAIL, error: err });
        Swal.fire({
          icon: "error",
          title: "Error.....",
        });
      });
  };
}
