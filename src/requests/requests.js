import axios from "axios";
import { setCurrent, setFetchedLocation } from "../store/slice";
import { CURRENT_URL, KEY } from "./config";

export const getAll = async (dispatch, location) => {
  if (!location) return;
  try {
    const { data } = await axios.get(`${CURRENT_URL}?key=${KEY}&q=${location}`);
    console.log(data);
    dispatch(setFetchedLocation(data.location));
    dispatch(setCurrent(data.current));
  } catch (e) {
    alert("error");
    console.log(e);
  }
};
