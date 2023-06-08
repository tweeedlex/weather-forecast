import React from "react";
import { Card } from "../../components/Card/Card.jsx";
import styles from "./Current.module.scss";
import thermometer from "../../images/thermometer.png";
import { useSelector } from "react-redux";

import windIcon from "../../images/icons/forecast/wind.png";
import precipIcon from "../../images/icons/forecast/precip.png";
import humidityIcon from "../../images/icons/forecast/humidity.png";
import pressureIcon from "../../images/icons/forecast/pressure.png";
import cloudIcon from "../../images/icons/forecast/cloud.png";

export const Current = () => {
  const current = useSelector((state) => state.current);
  const fetchedLocation = useSelector((state) => state.fetchedLocation);

  return fetchedLocation.name ? (
    <Card>
      <div className={styles.current}>
        <ul className={styles.info}>
          <li>Last updated: {current.last_updated}</li>
          <li className={styles.condition}>
            <img src={"https:" + current.condition.icon} width={48} alt="" />
            {current.condition.text}
          </li>
          <li>
            <img src={windIcon} alt="" /> Wind: {current.wind_kph} kph,{" "}
            {current.wind_dir}
          </li>
          <li>
            <img src={pressureIcon} alt="" />
            Pressure: {current.pressure_mb} milibars
          </li>
          <li>
            <img src={precipIcon} alt="" />
            Precip: {current.precip_mm} mm
          </li>
          <li>
            <img src={humidityIcon} alt="" />
            Humidity: {current.humidity}%
          </li>
          <li>
            <img src={cloudIcon} alt="" />
            Cloud: {current.cloud}%
          </li>
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
