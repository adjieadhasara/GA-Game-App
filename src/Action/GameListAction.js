import * as types from "../ActionTypes/GameListActionTypes";
import axios from "axios";
import Swal from "sweetalert2";

export function gamesListAction(pages, id) {
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
