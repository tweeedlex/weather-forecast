import React from "react";
import { Card } from "../../components/Card/Card.jsx";
import styles from "./Current.module.scss";
import thermometer from "../../images/thermometer.png";
import { useSelector } from "react-redux";

export const Current = () => {
  const current = useSelector((state) => state.current);
  const fetchedLocation = useSelector((state) => state.fetchedLocation);
  console.log(current);

  return fetchedLocation.name ? (
    <Card>
      <div className={styles.current}>
        <ul className={styles.info}>
          <li>Last updated: {current.last_updated}</li>
          <li>{current.condition.text}</li>
          <li>
            Wind: {current.wind_kph} kph, {current.wind_dir}
          </li>
          <li>Pressure: {current.pressure_mb} milibars</li>
          <li>Precip: {current.precip_mm} mm</li>
          <li>Humidity: {current.humidity}%</li>
          <li>Cloud: {current.cloud}%</li>
          <li>Gust: {current.gust_kph} kph</li>
        </ul>
        <div className={styles.temperature}>
          <div className={styles.numbers}>
            <p>Feels: {current.feelslike_c}°</p>
            <h2>{Math.round(current.temp_c)}°</h2>
          </div>
          <div className={styles.thermometer}>
            <span
              style={{ height: `${+current.temp_c * 2.02 + 70}px` }}
              className={styles.scale}
            ></span>
            <img src={thermometer} alt="thermometer" />
          </div>
        </div>
      </div>
    </Card>
  ) : null;
};
