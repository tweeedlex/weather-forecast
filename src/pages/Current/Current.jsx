import React from "react";
import { Card } from "../../components/Card/Card.jsx";
import styles from "./Current.module.scss";
import thermometer from "../../images/thermometer.png";

export const Current = () => {
  return (
    <Card>
      <div className={styles.current}>
        <ul className={styles.info}>
          <li>Last updated: </li>
          <li>Wind: </li>
          <li>Pressure: </li>
          <li>Precip: </li>
          <li>Humidity: </li>
          <li>Cloud: </li>
          <li>Gust: </li>
        </ul>
        <div className={styles.temperature}>
          <div className={styles.numbers}>
            <p>Feels 9.5°</p>
            <h2>11°</h2>
          </div>
          <div className={styles.thermometer}>
            <span style={{ height: "100px" }} className={styles.scale}></span>
            <img src={thermometer} alt="thermometer" />
          </div>
        </div>
      </div>
    </Card>
  );
};
