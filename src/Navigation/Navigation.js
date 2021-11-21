import React from "react";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <React.Fragment>
      <div className={styles.Container}>
        <nav className={styles.navContainer}>
          <div className={styles.navWrapper}>
            <h1 className={styles.navLogo}>RGA</h1>
            <div className={styles.navInputWrap}>
              <input
                className={styles.navInputSearch}
                type="text"
                placeholder="Search Game ..."
              />
            </div>
            {/* <p className={styles.navList}>Home</p> */}
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Navigation;
