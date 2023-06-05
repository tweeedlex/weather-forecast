import { Route, Routes } from "react-router";
import { Current } from "./pages/Current/Current.jsx";
import { Forecast } from "./pages/Forecast/Forecast.jsx";
import { useEffect, useState } from "react";
import { History } from "./pages/History.jsx";
import { Future } from "./pages/Future.jsx";
import { Header } from "./components/Header/Header.jsx";
import { useSelector } from "react-redux";
import { getAll } from "./requests/requests.js";
import { useDispatch } from "react-redux";
import { setLocation } from "./store/slice.js";
import { useBackground } from "./hooks/useBackground.js";

function App() {
  const location = useSelector((state) => state.location);
  const fetchedLocation = useSelector((state) => state.fetchedLocation);
  const current = useSelector((state) => state.current);
  const dispatch = useDispatch();
  useEffect(() => {
    getAll(dispatch, location);
  }, [location]);

  const [background, setBackground] = useState("");

  useBackground(current, setBackground);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        dispatch(setLocation(`${lat},${lon}`));
      });
    }
  }, []);

  return (
    <div
      className="App"
      style={{
        background: `url("${background}") 0 0/cover no-repeat`,
      }}
    >
      <div className="filter">
        <div></div>
      </div>
      <Header />
      <main>
        <div className="main__container">
          <h1>
            {fetchedLocation?.name
              ? `${fetchedLocation.name}, ${
                  fetchedLocation.region ? fetchedLocation.region + ", " : ""
                } ${fetchedLocation.country}`
              : "No location yet"}
          </h1>
          <Routes>
            <Route path="/" element={<Current />} />
            <Route path="/forecast" element={<Forecast />} />
            <Route path="/history" element={<History />} />
            <Route path="/future" element={<Future />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
