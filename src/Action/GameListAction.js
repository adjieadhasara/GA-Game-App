import * as types from "../ActionTypes/GameListActionTypes";
import axios from "axios";
import Swal from "sweetalert2";

export function gamesListAction(pages) {
  return (dispatch) => {
    dispatch({ type: types.GET_GAMELIST_REQUEST });

    axios({
      method: "GET",
      url: `/games?key=${process.env.REACT_APP_GAMES_API_KEY}&page=${pages}`,
    })
      .then((response) => {
        let result = response.data.results;
        dispatch({ type: types.GET_GAMELIST_SUCCESS, game: result });
        if (result && result.length) {
          return Swal.fire({
            icon: "success",
            title: "Loading Page Success....",
          });
        }
      })
      .catch((err) => {
        dispatch({ type: types.GET_GAMELIST_FAIL, error: err });
        Swal.fire({
          icon: "error",
          title: "Error.....",
        });
      });
  };
}

export function gamesFilter(filterPages, genresGameFilters) {
  return (dispatch) => {
    dispatch({ type: types.GET_GAMESFILTER_REQUEST });

    axios({
      method: "GET",
      url: `/games?key=${process.env.REACT_APP_GAMES_API_KEY}&page=${filterPages}&genres=${genresGameFilters}`,
    })
      .then((response) => {
        let resultFilter = response.data;
        console.log(response.data.data, "filter");
        dispatch({
          type: types.GET_GAMESFILTER_SUCCESS,
          genresGameFilters: resultFilter,
        });
        // if (result && result.length) {
        //   return Swal.fire({
        //     icon: "success",
        //     title: "Loading Page Success....",
        //   });
        // }
      })
      .catch((err) => {
        dispatch({ type: types.GET_GAMESFILTER_FAIL, error: err });
        Swal.fire({
          icon: "error",
          title: "Error.....",
        });
      });
  };
}

//  G E N R E ====================================================================================
// export default function gamesDetails(slug, pages, platforms, genre) {
//   return (dispatch) => {
//     dispatch({ type: types.GET_GAMEDETAILS_REQUEST });

//     axios({
//       method: "GET",
//       url: `/games/${slug}?key=8fbbb416b9ce4c4e80d04e11185e921e&slug`,
//     })
//       .then((response) => {
//         let gameDet = response.data;
//         console.log(gameDet);
//         dispatch({
//           type: types.GET_GAMEDETAILS_SUCCESS,
//           detail: gameDet,
//         });
//         // if (details && details.length) {
//         //   return Swal.fire({
//         //     icon: "success",
//         //     title: "Loading Page Success....",
//         //   });
//         // }
//       })
//       .catch((err) => {
//         dispatch({ type: types.GET_GAMEDETAILS_FAIL, error: err });
//         Swal.fire({
//           icon: "error",
//           title: "Error.....",
//         });
//       });
//   };
// }
