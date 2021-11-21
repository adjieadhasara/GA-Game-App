import * as React from "react";
import styles from "../Home/GameList.module.css";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { gamesListAction } from "../../Action/GameListAction";
import Navigation from "../../Navigation/Navigation";
import { SpinnerInfinity } from "spinners-react";
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

  const [pages, setPages] = React.useState(1);
  let gameData = props.game.game;
  const classes = useStyles();

  React.useEffect(() => {
    props.gamesListAction(pages);
  }, []);

  // console.log(props, "dapet cuy");

  //  F U N C T I O N   ==========================================================================//

  const handleChange = (event, value) => {
    setPages(value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    props.gamesListAction(pages);
  };

  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.listWrapper}>
        <div className={styles.fillterWrap}>
          {props.game.loading ? (
            <SpinnerInfinity
              size={200}
              thickness={161}
              speed={117}
              color="rgba(57, 172, 123, 1)"
              secondaryColor="rgba(156, 57, 172, 1)"
            />
          ) : (
            gameData.map((games) => {
              return (
                <Card
                  key={games.id}
                  sx={{
                    maxWidth: 250,
                    bgcolor: "black",
                    borderRadius: "20px",
                    boxShadow: "0px 0px 15px #ff9c2a",
                  }}
                >
                  <div className={styles.iconsGame}>
                    <RiXboxLine />
                    <RiPlaystationLine />
                    <RiWindowsFill />
                    <RiAppleFill />
                  </div>

                  <CardMedia
                    component="img"
                    height="194"
                    image={games.background_image}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <Typography color="white">{games.name}</Typography>
                    <Typography color="white" variant="body2">
                      Release date : {games.released}
                    </Typography>
                    <Typography color="white" variant="body3">
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
            <Stack spacing={2} className={styles.Pagination}>
              <Pagination
                count={50}
                page={pages}
                defaultPage="1"
                onClick={handleClick}
                onChange={handleChange}
                classes={{ ul: classes.ul }}
              />
            </Stack>
          )}
        </div>
      </div>
    </div>
  );
}

const MapStateToProps = (store) => {
  return {
    game: store.game,
  };
};

const MapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      gamesListAction,
    },
    dispatch
  );
};

export default connect(MapStateToProps, MapDispatchToProps)(GamesList);
