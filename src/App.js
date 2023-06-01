import { Route, Routes } from "react-router";
import { Current } from "./pages/Current/Current.jsx";
import { Forecast } from "./pages/Forecast.jsx";
import { History } from "./pages/History.jsx";
import { Future } from "./pages/Future.jsx";
import { Header } from "./components/Header/Header.jsx";
import background from "./images/backgrounds/sunny.png";

function App() {
  return (
    <div className="App" style={{ background: `url("${background}")` }}>
      <Header />
      <main>
        <div className="main__container">
          <h1>Zhytomyr, Ukraine</h1>
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
