import React from "react";
import { Card } from "../../components/Card/Card.jsx";
import styles from "./Forecast.module.scss";
import { useSelector } from "react-redux";

export const Forecast = () => {
  const forecast = useSelector((state) => state.forecast);
  const fetchedLocation = useSelector((state) => state.fetchedLocation);

  return fetchedLocation.name ? (
    <Card>
      <div className={styles.forecast}></div>
    </Card>
  ) : null;
};
