import * as React from "react";
import styles from "../Home/GameDetails.module.css";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { bindActionCreators } from "redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { gamesDetails } from "../../Action/GameDetailsAction";
import { gamesPlatforms } from "../../Action/GamePlatformsaction";
import { RiXboxLine } from "react-icons/ri";
import { RiPlaystationLine } from "react-icons/ri";
import { RiWindowsFill } from "react-icons/ri";
import { RiAppleFill } from "react-icons/ri";
import moment from "moment";
import { GiStaryu } from "react-icons/gi";

function GameDetails(props) {
  let { id } = useParams();
  let detailsGame = props.detail.detail;
  let getRatings = detailsGame.ratings;
  // let result =getRatings.map((rate))
  console.log(detailsGame, "details");

  React.useEffect(() => {
    props.gamesDetails(id);
  }, [id]);

  // React.useEffect(() => {
  //   props.gamesPlatforms(id);
  // }, [id]);
  // console.log(getPlatform.image_background);

  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.detailsWrapper}>
          <img
            src={detailsGame.background_image}
            className={styles.backgroundDetails}
          />
          <div className={styles.wrap}>
            <div className={styles.iconsGame}>
              <RiXboxLine />
              <RiPlaystationLine />
              <RiWindowsFill />
              <RiAppleFill />
              <p className={styles.date}>
                Release date :&nbsp; &nbsp;{" "}
                {moment(detailsGame.released).format("MMMM, D Y")}
              </p>
            </div>
            <h1 className={styles.gameName}>{detailsGame.name}</h1>
            <p className={styles.date}>
              # Total Ratings : &nbsp; &nbsp; {detailsGame.ratings_count}
            </p>
            <div className={styles.ratingTop}>
              <h1 className={styles.ratingCount}>{detailsGame.rating_top}</h1>
              <GiStaryu />
            </div>
          </div>
          <div className={styles.descWrap}>
            <p className={styles.descText}>
              ABOUT : &nbsp; &nbsp; {detailsGame.description_raw}
            </p>
          </div>
          <div className={styles.descWrap}></div>
          {/* {getRatings.map((rate) => {
          return (
            <div className={styles.iconsGame}>
              <p>
                <GiDiamondsSmile />
              </p>
              <p>Exeptional </p>
            </div>
          );
        })} */}
        </div>
      </div>
    </React.Fragment>
  );
}
const MapStateToProps = (store) => {
  return {
    detail: store.detail,
    // platforms: store.platforms,
  };
};

const MapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {
      gamesDetails,
      // gamesPlatforms,
    },
    dispatch
  );
};
export default connect(MapStateToProps, MapDispatchToProps)(GameDetails);
