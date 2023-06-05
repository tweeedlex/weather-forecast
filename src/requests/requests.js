import axios from "axios";
import { setCurrent, setFetchedLocation, setForecast } from "../store/slice";
import { FORECAST_URL, KEY } from "./config";

export const getAll = async (dispatch, location) => {
  if (!location) return;
  try {
    const { data } = await axios.get(
      `${FORECAST_URL}?key=${KEY}&q=${location}`
    );
    dispatch(setFetchedLocation(data.location));
    dispatch(setCurrent(data.current));
    dispatch(setForecast(data.forecast));
  } catch (e) {
    alert("error");
    console.log(e);
  }
};
