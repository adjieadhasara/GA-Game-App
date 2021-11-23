import * as types from "../ActionTypes/GameListActionTypes";
import axios from "axios";
import Swal from "sweetalert2";

export function gamesDetails(id) {
  return (dispatch) => {
    dispatch({ type: types.GET_GAMEDETAILS_REQUEST });

    axios({
      method: "GET",
      url: `/games/${id}?key=${process.env.REACT_APP_GAMES_API_KEY}`,
    })
      .then((response) => {
        let gameDet = response.data;
        let genres = response.data.genres;
        let platformsData = response.data.platforms;
        let developers = response.data.developers;

        dispatch({
          type: types.GET_GAMEDETAILS_SUCCESS,
          detail: gameDet,
          developer: developers,
          genre: genres,
          platformName: platformsData,
        });
        if (gameDet && !gameDet.length) {
          return Swal.fire({
            icon: "success",
            title: "Loading Page Success....",
          });
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
