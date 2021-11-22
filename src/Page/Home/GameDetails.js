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
  let getGenres = props.detail.genre;
  let platformss = props.detail.platformName;
  let developers = props.detail.developer;
  // let result =getRatings.map((rate))
  console.log(props, "details");
  console.log(developers, "details");

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
          <div className={styles.descWrapAbout}>
            <h4 className={styles.titleTextAbout}>About</h4> :
            <p className={styles.descText}>{detailsGame.description_raw}</p>
          </div>

          <div className={styles.descWrap}>
            <h4 className={styles.titleText}>Genres</h4>
            <p className={styles.descText}>
              {getGenres.map((e) => `${e.name}, `)}
            </p>
          </div>
          <div className={styles.descWrap}>
            <h4 className={styles.titleText}>Developers</h4>
            <p className={styles.descText}>
              {developers.map((e) => `${e.name}  `)}
            </p>
          </div>
          <div className={styles.descWrap}>
            <h4 className={styles.titleText}>Platforms</h4>
            <p className={styles.descTextPlatforms}>
              {platformss.map((e) => `[ ${e.platform.name} ],  `)}
            </p>
          </div>
          {/* <div className={styles.descWrap}>
            <p className={styles.descText}>
              {gamesDetails.map((e) => `${e.developers}, `)}
            </p>
          </div> */}

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
    genre: store.genre,
    platformName: store.platformName,
    developer: store.developer,
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
