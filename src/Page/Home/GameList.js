import * as React from "react";
import styles from "../Home/GameList.module.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useParams } from "react-router";
import { ReactVideo } from "reactjs-media";

import { Link } from "react-router-dom";
import { gamesListAction, gamesFilter } from "../../Action/GameListAction";
import Navigation from "../../Navigation/Navigation";
import { gamesGenreList } from "../../Action/GamePlatformsaction";
import { SpinnerInfinity } from "spinners-react";
import { SpinnerDiamond } from "spinners-react";

import moment from "moment";
// MUI material ( CARD IMPORT ) =====================================================================//

import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import { makeStyles } from "@mui/styles";
import Stack from "@mui/material/Stack";
import { RiXboxLine } from "react-icons/ri";
import { RiPlaystationLine } from "react-icons/ri";
import { RiWindowsFill } from "react-icons/ri";
import { BiSliderAlt } from "react-icons/bi";
import { RiAppleFill } from "react-icons/ri";

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#ff9c2a",
      fontSize: "18px",
      backgroundColor: "#4b4a4a",
    },
    "& .Mui-selected": {
      color: "rgb(6, 247, 195)",
    },
    "& .MuiPaginationItem-icon": {
      color: "#ff9c2a",
    },
  },
}));

function GamesList(props) {
  //  S T A T E =========================================================================================//
  const classes = useStyles();
  const [pages, setPages] = React.useState(1);
  const [filterPages, setFilterPages] = React.useState(1);
  const [genresGameFilters, setGenresGameFilters] = React.useState("");
  const colors = [
    "2px solid #df10f1",
    "2px solid #06d1b6",
    "2px solid #acd106",
    "2px solid #FF8042",
    "2px solid #8006d1",
    "2px solid #d14606",
    "2px solid #FFBB28",
    "2px solid #acd106",
    "2px solid #0088FE",
    "2px solid #00C49F",
    "2px solid #FFBB28",
    "2px solid #FF8042",
    "2px solid #0088FE",
    "2px solid #00C49F",
    "2px solid #FFBB28",
    "2px solid #FF8042",
    "2px solid #0088FE",
    "2px solid #00C49F",
    "2px solid #FFBB28",
    "2px solid #FF8042",
  ];
  console.log(props, "dapet cuy");
  let gameData = props.game.game;
  let genreData = props.genresList.genresList;
  let fillterData = props.genresGameFilters.genresGameFilters;

  React.useEffect(() => {
    props.gamesListAction(pages);
  }, [pages]);

  React.useEffect(() => {
    props.gamesGenreList();
  }, []);

  React.useEffect(() => {
    props.gamesFilter(genresGameFilters, filterPages);
  }, [genresGameFilters, filterPages]);

  //  F U N C T I O N   ==========================================================================//

  const handleChange = (event, value) => {
    setPages(value);
  };
  const handleFiltersPagination = (event, value) => {
    setFilterPages(value);
  };
  const handleClickGenre = (value) => {
    // console.log(value, "uwow");

    setGenresGameFilters(value);
  };

  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.wrappers}>
        <div className={styles.genreList}>
          {genreData.map((genres, i) => {
            return (
              <button
                className={styles.genreBtn}
                style={{ border: colors[i] }}
                key={i}
                onClick={() => handleClickGenre(genres.slug)}
              >
                {genres.slug}
              </button>
            );
          })}
        </div>

        {genresGameFilters === "" ? (
          <div className={styles.listWrapper}>
            <div className={styles.fillterWrap}>
              {props.game.loading ? (
                <div className={styles.loading}>
                  <SpinnerInfinity
                    size={200}
                    thickness={161}
                    speed={117}
                    color="rgba(57, 172, 123, 1)"
                    secondaryColor="rgba(156, 57, 172, 1)"
                  />
                </div>
              ) : (
                gameData.map((games) => {
                  return (
                    <Card
                      key={games.id}
                      sx={{
                        maxWidth: 250,
                        bgcolor: "black",
                        borderRadius: "20px",
                        // border: "1px solid rgb(104, 104, 104)",
                        boxShadow: "0px 0px 15px rgb(104, 104, 104)",
                      }}
                    >
                      <div className={styles.iconsGame}>
                        <RiXboxLine />
                        <RiPlaystationLine />
                        <RiWindowsFill />
                        <RiAppleFill />
                      </div>
                      <Link
                        key={games.id}
                        style={{ textDecoration: "none" }}
                        to={`/game-details/${games.slug}/`}
                      >
                        <CardMedia
                          component="img"
                          height="194"
                          key={games.id}
                          image={games.background_image}
                          alt="Paella dish"
                        />
                        <CardContent>
                          <Typography
                            key={games.id}
                            color="white"
                            sx={{ textShadow: "0px 0px 15px rgb(6, 247, 195)" }}
                          >
                            {games.name}
                          </Typography>
                        </CardContent>
                      </Link>
                      <CardContent>
                        <Typography
                          color="rgb(6, 247, 195)"
                          sx={{
                            fontSize: "13px",
                            mt: "-18px",
                          }}
                        >
                          Release date :{" "}
                          {moment(games.released).format("MMMM, D Y")}
                        </Typography>
                        <Typography color="white" variant="body2">
                          {/* Genres :{games.genres} */}
                        </Typography>
                      </CardContent>
                    </Card>
                  );
                })
              )}
              {props.game.loading ? (
                ""
              ) : (
                <Stack spacing={2}>
                  <Pagination
                    count={100}
                    page={pages}
                    classes={{ ul: classes.ul }}
                    size="large"
                    onChange={handleChange}
                  />
                </Stack>
              )}
            </div>
          </div>
        ) : (
          <div className={styles.listWrapFilter}>
            <div className={styles.fillterListWrap}>
              {props.game.loading ? (
                <div className={styles.loadingFilters}>
                  <SpinnerInfinity
                    size={200}
                    thickness={161}
                    speed={117}
                    color="rgba(57, 172, 123, 1)"
                    secondaryColor="rgba(156, 57, 172, 1)"
                  />
                </div>
              ) : (
                fillterData.map((data) => {
                  return (
                    <Card
                      key={data.id}
                      sx={{
                        maxWidth: 250,
                        bgcolor: "black",
                        borderRadius: "20px",
                        // border: "1px solid rgb(104, 104, 104)",
                        boxShadow: "0px 0px 15px rgb(104, 104, 104)",
                      }}
                    >
                      <div className={styles.iconsGameFilter}>
                        <RiXboxLine />
                        <RiPlaystationLine />
                        <RiWindowsFill />
                        <RiAppleFill />
                      </div>
                      <Link
                        key={data.id}
                        style={{ textDecoration: "none" }}
                        to={`/game-details/${data.slug}/`}
                      >
                        <CardMedia
                          component="img"
                          height="194"
                          key={data.id}
                          image={data.background_image}
                          alt="Paella dish"
                        />
                        <CardContent>
                          <Typography
                            key={data.id}
                            color="white"
                            sx={{ textShadow: "0px 0px 15px rgb(6, 247, 195)" }}
                          >
                            {data.name}
                          </Typography>
                        </CardContent>
                      </Link>
                      <CardContent>
                        <Typography
                          color="rgb(6, 247, 195)"
                          sx={{
                            fontSize: "13px",
                            mt: "-18px",
                          }}
                        >
                          Release date :{" "}
                          {moment(data.released).format("MMMM, D Y")}
                        </Typography>
                        <Typography color="white" variant="body2">
                          {/* Genres :{games.genres} */}
                        </Typography>
                      </CardContent>
                    </Card>
                  );
                })
              )}
              {props.game.loading ? (
                ""
              ) : (
                <Stack spacing={2}>
                  <Pagination
                    count={50}
                    page={filterPages}
                    classes={{ ul: classes.ul }}
                    size="large"
                    onChange={handleFiltersPagination}
                  />
                </Stack>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const MapStateToProps = (store) => {
  return {
    game: store.game,
    genresGameFilters: store.genresGameFilters,
    genresList: store.genresList,
  };
};

const MapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      gamesListAction,
      gamesFilter,
      gamesGenreList,
    },
    dispatch
  );
};

export default connect(MapStateToProps, MapDispatchToProps)(GamesList);
