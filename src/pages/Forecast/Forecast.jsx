import React from "react";
import { Card } from "../../components/Card/Card.jsx";
import styles from "./Forecast.module.scss";
import { useSelector } from "react-redux";
import maxIcon from "../../images/icons/forecast/max.png";
import minIcon from "../../images/icons/forecast/min.png";
import avgIcon from "../../images/icons/forecast/avg.png";
import windIcon from "../../images/icons/forecast/wind.png";
import precipIcon from "../../images/icons/forecast/precip.png";
import snowIcon from "../../images/icons/forecast/snow.png";
import visibilityIcon from "../../images/icons/forecast/visibility.png";
import humidityIcon from "../../images/icons/forecast/humidity.png";
import rainIcon from "../../images/icons/forecast/rain.png";
import snowflakeIcon from "../../images/icons/forecast/snowflake.png";
import { Hour } from "../../components/Hour/Hour.jsx";

export const Forecast = () => {
  const forecast = useSelector((state) => state.forecast);
  const fetchedLocation = useSelector((state) => state.fetchedLocation);
  console.log(forecast);

  return fetchedLocation.name ? (
    <Card isScroll={true}>
      <div className={styles.forecast}>
        <p>{forecast.date}</p>
        <p className={styles.general}>
          <span>
            <img alt="" src={maxIcon} /> Max: {forecast.day.maxtemp_c}°C
          </span>
          <span>
            <img alt="" src={minIcon} /> Min: {forecast.day.mintemp_c}°C
          </span>
          <span>
            <img alt="" src={avgIcon} /> Avg: {forecast.day.avgtemp_c}°C
          </span>
          <span>
            <img alt="" src={windIcon} /> Max wind: {forecast.day.maxwind_kph}{" "}
            kph
          </span>
          <span>
            <img alt="" src={precipIcon} /> Total precip:{" "}
            {forecast.day.totalprecip_mm} mm
          </span>
          <span>
            <img alt="" src={snowflakeIcon} /> Total snow:{" "}
            {forecast.day.totalsnow_cm} cm
          </span>
          <span>
            <img alt="" src={visibilityIcon} /> Avg visibility:{" "}
            {forecast.day.avgvis_km} km
          </span>
          <span>
            <img alt="" src={humidityIcon} /> Avg humidity:{" "}
            {forecast.day.avghumidity}%
          </span>
          <span>
            <img alt="" src={rainIcon} /> Chance of rain:{" "}
            {forecast.day.daily_chance_of_rain}%
          </span>
          <span>
            <img alt="" src={snowIcon} /> Chance of snow:{" "}
            {forecast.day.daily_chance_of_snow}%
          </span>
        </p>
        <hr />
        <div className={styles.hourly}>
          {forecast.hour.map((hour) => (
            <Hour hour={hour} />
          ))}
        </div>
      </div>
    </Card>
  ) : null;
};
