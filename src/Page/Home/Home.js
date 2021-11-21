import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <div className={styles.sectionWrapper}>
          <div className={styles.titleWrapper}>
            <h1 className={styles.pageTitle}>
              GAME....
              <br /> IS OUR LIFE
            </h1>
            <p className={styles.pagetitleSecond}>
              Get Your Highlight GAME !!!
            </p>
            <Link to="./games-list">
              <button className={styles.btnStart}>Go Start .....</button>
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
