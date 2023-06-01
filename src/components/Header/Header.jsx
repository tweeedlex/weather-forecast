import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import searchIcon from "../../images/icons/search.png";

export const Header = () => {
  return (
    <header>
      <div className={"header__container " + styles.container}>
        <div className={styles.search}>
          <input type="text" placeholder="Enter your city..." />
          <button className="search">
            <img src={searchIcon} alt="Search" />
          </button>
        </div>
        <nav className={styles.navigation}>
          <ul className={styles.links}>
            <li className={styles.linkItem}>
              <Link className={styles.link} to="/">
                Current
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link className={styles.link} to="/forecast">
                Forecast
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link className={styles.link} to="/history">
                History
              </Link>
            </li>
            <li className={styles.linkItem}>
              <Link className={styles.link} to="/future">
                Future
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
