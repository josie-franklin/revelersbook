import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import SearchPage from "./pages/SearchPage/SearchPage";

function App() {
  return (
    <div className="app-container padding">
      <Router>
        <Routes>
          <Route path="/" element={<SearchPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
