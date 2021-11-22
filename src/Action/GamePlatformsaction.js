import * as types from "../ActionTypes/GameListActionTypes";
import axios from "axios";
import Swal from "sweetalert2";

export function gamesGenreList() {
  return (dispatch) => {
    dispatch({ type: types.GET_GAMESGENRELIST_REQUEST });

    axios({
      method: "GET",
      url: `/genres?key=${process.env.REACT_APP_GAMES_API_KEY}`,
    })
      .then((response) => {
        let gamesGenresData = response.data.results;
        // console.log(response.data.results, "platform njing");
        dispatch({
          type: types.GET_GAMESGENRELIST_SUCCESS,
          genresList: gamesGenresData,
        });

        // if (gameDet && !gameDet.length) {
        //   return Swal.fire({
        //     icon: "success",
        //     title: "Loading Page Success....",
        //   });
        // }
      })
      .catch((err) => {
        dispatch({ type: types.GET_GAMESGENRELIST_FAIL, error: err });
        Swal.fire({
          icon: "error",
          title: "Error.....",
        });
      });
  };
}
