import { Route, Routes } from "react-router";
import { Current } from "./pages/Current/Current.jsx";
import { Forecast } from "./pages/Forecast.jsx";
import { useEffect } from "react";
import { History } from "./pages/History.jsx";
import { Future } from "./pages/Future.jsx";
import { Header } from "./components/Header/Header.jsx";
import background from "./images/backgrounds/sunny.png";
import { useSelector } from "react-redux";
import { getAll } from "./requests/requests.js";
import { useDispatch } from "react-redux";

function App() {
  const location = useSelector((state) => state.location);
  const fetchedLocation = useSelector((state) => state.fetchedLocation);
  const dispatch = useDispatch();
  useEffect(() => {
    getAll(dispatch, location);
  }, [location]);

  return (
    <div
      className="App"
      style={{
        background: `url("${background}") 0 0/cover no-repeat`,
      }}
    >
      <Header />
      <main>
        <div className="main__container">
          <h1>
            {fetchedLocation?.name
              ? `${fetchedLocation.name}, ${fetchedLocation.country}`
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
