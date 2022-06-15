import './App.css';
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import DesignPage from "./components/DesignPage";
import MOVIE from "./components/MOVIE";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/design" element={<DesignPage />} />
          <Route path="/movie" element={<MOVIE />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
