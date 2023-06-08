import React, { useState } from "react";
import { Card } from "../../components/Card/Card.jsx";
import styles from "./Forecast.module.scss";
import { useSelector } from "react-redux";
import maxIcon from "../../images/icons/forecast/max.png";
import minIcon from "../../images/icons/forecast/min.png";
import avgIcon from "../../images/icons/forecast/avg.png";
import windIcon from "../../images/icons/forecast/wind.png";
import precipIcon from "../../images/icons/forecast/precip.png";
import humidityIcon from "../../images/icons/forecast/humidity.png";
import snowflakeIcon from "../../images/icons/forecast/snowflake.png";
import { Hour } from "../../components/Hour/Hour.jsx";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

export const Forecast = () => {
  const forecast = useSelector((state) => state.forecast);
  const fetchedLocation = useSelector((state) => state.fetchedLocation);
  console.log(forecast);
  const [displayNumber, setDisplayNumber] = useState(3);
  console.log(forecast);

  return fetchedLocation.name ? (
    <Card isScroll={true}>
      <p className={styles.settings}>
        Display every:{" "}
        <span>
          <input
            type="number"
            value={displayNumber}
            onChange={(e) =>
              e.target.value >= 0 && e.target.value <= 8
                ? setDisplayNumber(e.target.value)
                : ""
            }
          />
          hour
        </span>
      </p>
      <hr />
      <Swiper pagination={true} modules={[Pagination]}>
        {forecast.map((date) => (
          <SwiperSlide>
            <div className={styles.forecast}>
              <p className={styles.dateHeader}>
                <span>{date.date}</span>
                <span>
                  <img
                    alt=""
                    src={date.day.condition.icon}
                    width={24}
                    height={24}
                  />
                  {date.day.condition.text}
                </span>
                <span>
                  <img alt="" src={avgIcon} /> {date.day.avgtemp_c}°C
                </span>
              </p>
              <p className={styles.general}>
                <span>
                  <img alt="" src={maxIcon} /> {date.day.maxtemp_c}°C
                </span>
                <span>
                  <img alt="" src={minIcon} />
                  {date.day.mintemp_c}°C
                </span>
                <span>
                  <img alt="" src={windIcon} />
                  {date.day.maxwind_kph} kph
                </span>
                <span>
                  <img src={precipIcon} alt="" />
                  {date.day.totalprecip_mm} mm
                </span>
                <span>
                  <img alt="" src={snowflakeIcon} />
                  {date.day.totalsnow_cm} cm
                </span>
                <span>
                  <img src={humidityIcon} alt="" />
                  {date.day.avghumidity}%
                </span>
              </p>
              <div className={styles.hourly}>
                {date.hour.map(
                  (hour) =>
                    hour.time.split(" ")[1].split(":")[0] % displayNumber ===
                      0 && <Hour hour={hour} />
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Card>
  ) : null;
};
