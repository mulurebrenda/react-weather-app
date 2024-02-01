import MainAside from "./MainAside";
import Forecast from "./Forecast";
import Github from "./Github";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <MainAside />
          <Forecast />
        </div>
      </div>
      <Github />
    </div>
  );
}

export default App;
