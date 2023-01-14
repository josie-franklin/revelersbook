import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import SearchPage from "./components/Search/Search";
import ChartContextProvider from "./context/ChartContext";

function App() {
  return (
    <div className="app-container padding">
      <Router>
        <ChartContextProvider>
          <Routes>
            <Route path="/" element={<SearchPage />} />
          </Routes>
        </ChartContextProvider>
      </Router>
    </div>
  );
}

export default App;
