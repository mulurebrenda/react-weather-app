import MainAside from "./MainAside";
import Github from "./Github";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <MainAside />
        </div>
      </div>
      <Github />
    </div>
  );
}

export default App;
